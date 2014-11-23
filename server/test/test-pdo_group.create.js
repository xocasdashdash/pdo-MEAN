'use strict';
var mongoose = require('mongoose');

require('../app/models/models.js').initialize();

var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Program = mongoose.model('Program');
var Course = mongoose.model('Course');

var q = require('q');

describe('Test de creación de grupos de PDOs', function() {
    var school, program, course, created_pdo = [],
        prom_array = [];

    before(function(done) {
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
                    pdo.school_name = school.schoolname;
                    pdo.program_code = program.code;
                    pdo.course_code = course.code;
                    prom_array.push(
                        request(config.url)
                        .post('/api/v1/pdo').send(pdo)
                        .expect('Content-Type', /json/).expect(200)
                    );
                }
                q.all(prom_array).then(function(results) {
                    for (var i = results.length - 1; i >= 0; i--) {
                        created_pdo.push(results[i].body);
                    }
                    done();
                }).
                catch (function(reason) {
                    console.log(reason);
                    console.log(reason.stack);
                    expect(1).to.equal(2);

                    done();
                });

            }).
            catch (function(reason) {
                console.log(reason);
                console.log(reason.stack);
                done();
            });
        });
    });
    it('should create a pdo_group', function(done) {
        var pdo_group = {}, pdo_group_creado;
        pdo_group.title = 'Titulo del grupo de pdo';
        pdo_group.summary = 'Cosas muy malas han pasado';
        pdo_group.pdos = JSON.stringify(created_pdo.map(function(pdo) {
            return pdo._id;
        }));
        request(config.url)
            .post('/api/v1/pdo_group').send(pdo_group)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function(result) {
                pdo_group_creado = result.body;
                pdo_group_creado.status.should.equal('STATUS_PENDIENTE');
                pdo_group_creado.title.should.equal(pdo_group.title);
                pdo_group_creado.should.have.property('pdos').with.length(3);
                pdo_group_creado.pdos[0].should.equal(created_pdo[0]._id);
                console.log(pdo_group_creado);
                done();
            }, function(reason) {
                console.log(reason);
                done();
            });

        expect(1).to.equal(1);
        //done();
    });
    after(function(done) {
        //Limpieza
        q.all(created_pdo.map(function(pdo) {
            return Pdo.findByIdAndRemove(pdo._id).exec();
        })).then(function(result) {
            console.log('Borrado');
            mongoose.connection.close();
            done();
        }).
        catch (function(reason) {
            console.log('Error al borrar');
            console.log(reason);
            console.log(reason.stack);
            mongoose.connection.close();
            //done();
        });
    });
});