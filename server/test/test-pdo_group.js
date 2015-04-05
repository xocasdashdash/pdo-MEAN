'use strict';
var mongoose = require('mongoose');
require('../app/models/models.js').initialize();
var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Program = mongoose.model('Program');
var Course = mongoose.model('Course');
var PdoGroup = mongoose.model('PdoGroup');
var sprintf = require("sprintf-js").sprintf;
var q = require('q');
describe('Test de grupos de PDOs', function() {
    var school;
    var program; 
    var course;
    var created_pdo = [];
    var pdo_to_add_later;
    var pdo_group_created;
    var created_comment_id;
    var other_school;
    var pdo_other_school;
    var token = {
        'Authorization': ''
    };
    var test_user = {
        username: 'joaquin.fernandez+schoolAdmin@edu.uah.es',
        password: '1234'
    };
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
                }).exec(),
                School.findOne({
                    schoolname: 'CCSS'
                }).exec(),
                request(url).
                post('/api/v1/login').
                send(test_user)
            ]).then(function(results) {
                program = results[0];
                school = results[1];
                course = results[2];
                other_school = results[3];
                token.Authorization = results[4].body.token;
                var pdo;
                for (var i = 0; i < 3; i++) {
                    pdo = {};
                    pdo.name = sprintf('Nombre%d', i);
                    pdo.surname = sprintf('Apellido%d', i);
                    pdo.num_id = '123456789A';
                    pdo.email = sprintf('jfcampo+%d@gmail.com', i);
                    pdo.phone = '654654654';
                    pdo.school = school;
                    pdo.program = program;
                    pdo.course = course;
                    pdo.title = sprintf("TITULO DEL PDO %d", i);
                    pdo.text = sprintf("TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO %d", i);
                    prom_array.push(
                        request(url).
                        post('/api/v1/pdo').
                        send(pdo).
                        expect('Content-Type', /json/).
                        expect(200));
                }
                for (var i = 3; i < 5; i++) {
                    pdo = {};
                    pdo.name = sprintf('PDOCCSS Nombre%d', i);
                    pdo.surname = sprintf('PDOCCSS Apellido%d', i);
                    pdo.num_id = '123456789A';
                    pdo.email = sprintf('jfcampo+%d@gmail.com', i);
                    pdo.phone = '654654654';
                    pdo.school = other_school;
                    pdo.program = program;
                    pdo.course = course;
                    pdo.title = sprintf("PDOCCSS TITULO DEL PDO %d", i);
                    pdo.text = sprintf("PDOCCSS TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO %d", i);
                    prom_array.push(
                        request(url).
                        post('/api/v1/pdo').
                        send(pdo).
                        expect('Content-Type', /json/).
                        expect(200));
                };
                
                q.all(prom_array).then(function(results) {
                    created_pdo = results.slice(0,2).map(function(e){return e.body;});
                    pdo_to_add_later = results[2].body;
                    pdo_other_school = results.slice(3).map(function(e){return e.body;});
                    done();
                }).
                catch (function(reason) {
                    console.log('Reason:',reason);
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
        prom = request(url).
        post('/api/v1/pdo_group').
        set(token).
        send(pdo_group).
        expect('Content-Type', /json/).
        expect(200).
        then(function(result) {
            pdo_group_created = result.body;
            pdo_group_created.status.should.equal('STATUS_PENDING');
            pdo_group_created.title.should.equal(pdo_group.title);
            pdo_group_created.should.have.property('pdos').with.length(created_pdo.length);
            console.log('CreatedPdo', created_pdo);
            pdo_group_created.pdos[0].should.equal(created_pdo[0]._id);
            done();
        }, function(reason) {
            done(reason);
        });
        return prom.promise;
    });
    it('should add a pdo to a group', function(done) {
        var prom, payload = {};
        payload.pdos = pdo_to_add_later._id;
        prom = request(url).
        put('/api/v1/pdo_group/' + pdo_group_created._id + '/pdo').
        set(token).
        send(payload).
        expect('Content-Type', /json/).expect(200).then(function(result) {
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
    /*
    it('should add a comment to a pdo group', function(done) {
        var comment = {};
        comment.text = faker.lorem.paragraphs();
        comment.title = 'Titulo del comentario ' + faker.random.number();
        request(url)
            .put('/api/v1/pdo_group/' + pdo_group_created._id + '/comment')
            .send(comment)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function(res) {
                var pdo_group = res.body;
                pdo_group.should.have.property('comments').with.length(1);
                pdo_group.comments[0].text.should.equal(comment.text);
                pdo_group.comments[0].title.should.equal(comment.title);
                created_comment_id = pdo_group.comments[0]._id;
                done();
            }).
        catch (function(reason) {
            console.log('Error al añadir comentario.', reason);
            done(reason);
        });
    });
    it('should remove a comment', function(done) {
        request(url)
            .delete('/api/v1/pdo_group/' + pdo_group_created._id + '/comment/' + created_comment_id)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function(res) {
                res.body.should.have.property('comments').with.length(0);
                done();
            }).
        catch (function(reason) {
            console.log('Error al borrar comentario.', reason);
            done(reason);
        });
    });*/
    it('a grouped pdo should have a pdo_group', function(done) {
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
        prom = request(url).
        delete('/api/v1/pdo_group/' + pdo_group_created._id + '/pdo').
        set(token).
        send(payload).expect('Content-Type', /json/).expect(200);
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
    it('a degrouped pdo should not have a pdo_group', function(done) {
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
    it('should not add a comment if it doesn\'t have text', function(done) {
        var bad_comment = {};
        bad_comment.title = 'Titulo del comentario ' + faker.random.number();
        request(url).
        put('/api/v1/pdo_group/' + pdo_group_created._id + '/comment').
        set(token).
        send(bad_comment).expect('Content-Type', /json/).expect(400).then(function(res) {
            //console.log(res.body);
            res.body.errors.text.type.should.equal('required');
            done();
        }).
        catch (function(reason) {
            console.log(reason);
            done(reason);
        });
    });
    it('should not add a comment if it doesn\'t have text of at least 50 chars', function(done) {
        var bad_comment = {};
        bad_comment.title = 'Titulo del comentario ' + faker.random.number();
        bad_comment.text = ' ';
        request(url).
        put('/api/v1/pdo_group/' + pdo_group_created._id + '/comment').
        set(token).
        send(bad_comment).expect('Content-Type', /json/).expect(400).then(function(res) {
            res.body.errors.text.message.should.equal('Text length should be between 50 and 3500 chars');
            done();
        }).
        catch (function(reason) {
            console.log(reason);
            done(reason);
        });
    });
    it('should not add a comment if it doesn\'t have title', function(done) {
        var bad_comment = {};
        bad_comment.title = '';
        bad_comment.text = faker.lorem.paragraphs();
        request(url).
        put('/api/v1/pdo_group/' + pdo_group_created._id + '/comment').
        set(token).
        send(bad_comment).expect('Content-Type', /json/).expect(400).then(function(res) {
            res.body.errors.title.type.should.equal('required');
            done();
        }).
        catch (function(reason) {
            console.log(reason);
            done(reason);
        });
    });
    it('should not add a comment if it doesn\'t have title of at least 10 chars', function(done) {
        var bad_comment = {};
        bad_comment.title = 'Titulo';
        bad_comment.text = faker.lorem.paragraphs();
        request(url).
        put('/api/v1/pdo_group/' + pdo_group_created._id + '/comment').
        set(token).
        send(bad_comment).
        expect('Content-Type', /json/).
        expect(400).
        then(function(res) {
            res.body.errors.title.message.should.equal('Title length should be more than 10 chars');
            done();
        }).
        catch (function(reason) {
            console.log(reason);
            done(reason);
        });
    });
    it('should not group pdos from another school', function (done) {
        var pdo_group = {}, pdo_group_creado, prom;
        pdo_group.title = 'Titulo del grupo de pdo - fail';
        pdo_group.summary = 'Cosas muy malas han pasado -fail';
        pdo_group.pdos = JSON.stringify(pdo_other_school.map(function(pdo) {
            return pdo._id;
        }));
        prom = request(url).
        post('/api/v1/pdo_group').
        set(token).
        send(pdo_group).
        expect('Content-Type', /json/).
        expect(401).
        then(function(result) {
            done();
        }, function(reason) {
            done(reason);
        });
        return prom.promise;
    });
    after(function(done) {
        //Limpieza
        if (typeof pdo_group_created === 'undefined') {
            done();
            return;
        }
        created_pdo.push(pdo_to_add_later);
        q.all(created_pdo.map(function(pdo) {
            return Pdo.findByIdAndRemove(pdo._id).exec();
        }).push(PdoGroup.findByIdAndRemove(pdo_group_created._id).exec())).
        then(function(result) {
            mongoose.connection.close();
            done();
        }).
        catch (function(reason) {
            console.log('NO Borrando...');
            console.log(reason);
            mongoose.connection.close();
            done(reason);
        });
    });
});