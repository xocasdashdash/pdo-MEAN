'use strict';
var mongoose = require('mongoose');

require('../app/models/models.js').initialize();

var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Program = mongoose.model('Program');
var Course = mongoose.model('Course');
var PdoGroup = mongoose.model('PdoGroup');

var q = require('q');

describe('Test de grupos de PDOs', function() {
    var school, program, course, created_pdo = [],
        pdo_to_add_later,
        pdo_group_created;

    before(function(done) {
        var prom_array = [];
        mongoose.connect(config.db.mongodb, function(err) {
            if (err) {
                console.log('Error en la BD');
                console.log(err.message);
            }
        }); // connect to our database
        mongoose.connection.on('error', function(err) {
            console.log('Error en la BD');
            console.log(err.message);
        });
        mongoose.connection.once('connected', function() {
            q.all([
                Program.findOne({
                    code: 'G57'
                }).exec(),
                School.findOne({
                    schoolname: 'Farmacia'
                }).exec(),
                Course.findOne({
                    code: '570000'
                }).exec()
            ]).then(function(results) {
                program = results[0];
                school = results[1];
                course = results[2];
                var pdo;
                for (var i = 0; i < 3; i++) {
                    pdo = {};
                    pdo.name = 'Nombre';
                    pdo.surname = 'Apellido';
                    pdo.num_id = '123456789A';
                    pdo.email = 'email@email.com';
                    pdo.phone = '654654654';
                    pdo.school = school;
                    pdo.program = program;
                    pdo.course = course;
                    pdo.title = "TITULO DEL PDO ";
                    pdo.text = "TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO ";
                    prom_array.push(
                        request(url)
                        .post('/api/v1/pdo').send(pdo)
                        .expect('Content-Type', /json/).expect(200)
                    );
                }
                q.all(prom_array).then(function(results) {
                    for (var i = results.length - 1; i >= 0; i--) {
                        if (i !== 1) {
                            created_pdo.push(results[i].body);
                        } else {
                            pdo_to_add_later = results[i].body;
                        }

                    }
                    done();
                }).
                catch (function(reason) {
                    done(reason);
                });

            }).
            catch (function(reason) {
                done(reason);
            });
        });
    });

    it('should create a pdo_group', function(done) {
        var pdo_group = {}, pdo_group_creado, prom;
        pdo_group.title = 'Titulo del grupo de pdo';
        pdo_group.summary = 'Cosas muy malas han pasado';
        pdo_group.pdos = JSON.stringify(created_pdo.map(function(pdo) {
            return pdo._id;
        }));
        prom = request(url)
            .post('/api/v1/pdo_group').send(pdo_group)
            .expect('Content-Type', /json/)
            .expect(200);

        prom
            .then(function(result) {
                pdo_group_created = result.body;
                pdo_group_created.status.should.equal('STATUS_PENDING');
                pdo_group_created.title.should.equal(pdo_group.title);
                pdo_group_created.should.have.property('pdos').with.length(2);
                pdo_group_created.pdos[0].should.equal(created_pdo[0]._id);
                //console.log(pdo_group_created);
                done();
            }, function(reason) {
                //console.log('FALLO1');
                done(reason);
            });
        return prom.promise;
    });

    it('should add a pdo to a group', function(done) {
        var prom, payload = {};
        payload.pdos = pdo_to_add_later._id;
        prom = request(url)
            .put('/api/v1/pdo_group/' + pdo_group_created._id + '/pdo')
            .send(payload)
            .expect('Content-Type', /json/)
            .expect(200);

        prom.then(function(result) {
            pdo_group_created = result.body;
            pdo_group_created.status.should.equal('STATUS_PENDING');
            pdo_group_created.should.have.property('pdos').with.length(3);
            pdo_group_created.pdos[2].should.equal(pdo_to_add_later._id);
            done();
        }).
        catch (function(reason) {
            done(reason);
        });
        return prom;
    });
    it('a pdo should have a pdo_group', function(done) {

        Pdo.findById(pdo_to_add_later._id, function(err, pdo) {
            if (err) {
                done(err);
            }
            if (!pdo) {
                done('PDO NOT FOUND');
            }
            pdo.toObject().should.have.property('group_id');
            pdo.group_id.toString().should.equal(pdo_group_created._id); 
            done();
        });

    });
    it('should remove a pdo from a group', function(done) {
        var prom, payload = {};
        payload.pdo_id = pdo_to_add_later._id;

        prom = request(url)
            .delete('/api/v1/pdo_group/' + pdo_group_created._id + '/pdo')
            .send(payload)
            .expect('Content-Type', /json/)
            .expect(200);

        prom.then(function(result) {
            var pdo_group_edited = result.body;
            pdo_group_edited.should.have.property('pdos');
            pdo_group_created.pdos.length.
            should.equal(pdo_group_edited.pdos.length + 1);
            pdo_group_edited.pdos.should.not.include(pdo_to_add_later._id);
            done();
        }).
        catch (function(reason) {
            done(reason);
        });

        return prom;
    });
    it('a pdo should not have a pdo_group', function(done) {
        var pdo_deleted_from_group = pdo_to_add_later;

        Pdo.findById(pdo_deleted_from_group._id, function(err, found_pdo) {
            if (err) {
                done(err);
            }
            if (!found_pdo) {
                done('PDO NOT FOUND');
            }
            expect(found_pdo.toObject().group_id).to.be.null;
            done();
        });

    });

    after(function(done) {
        //done();
        //Limpieza
        created_pdo.push(pdo_to_add_later);
        q.all(
            (created_pdo.map(function(pdo) {
                return Pdo.findByIdAndRemove(pdo._id).exec();
            })).push(PdoGroup.findByIdAndRemove(pdo_group_created._id).exec())
        ).then(function(result) {
            console.log('Borrado');
            mongoose.connection.close();
            done();
        }).
        catch (function(reason) {
            mongoose.connection.close();
            done(reason);
        });
    });
});