'use strict';
var mongoose = require('mongoose');

require('../app/models/models.js').initialize();

var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Program = mongoose.model('Program');
var Course = mongoose.model('Course');

var q = require('q');

describe('Tests de creacion de pdo', function() {
    var school, program, course, created_pdo;
    var number_of_calls = 0;
    before(function(done) {
        mongoose.connect(config.db.mongodb, function(err) {
            if (err) {
                console.log('Error en la BD');
                console.log(err.message);
            }
        });
        mongoose.connection.on('error', function(err) {
            console.log('Error en la BD');
            console.log(err.message);
        });
        mongoose.connection.once('open', function() {
            console.log('Conectado a la bd');  
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
                done();
            }).
            catch (function(reason) {
                console.log(reason.stack);
                console.log(reason); 
                done();  
            });
        });  
    }); 
    it('should create a pdo', function(done) {
        var pdo = {};
        pdo.name = 'Nombre'; 
        pdo.surname = 'Apellido';
        pdo.num_id = '123456789A';
        pdo.email = 'email@email.com';
        pdo.phone = '654654654'; 
        pdo.school_name = school.schoolname;
        pdo.program_code = program.code;
        pdo.course_code = course.code;
        request(config.url)
            .post('/api/v1/pdo') 
            .send(pdo)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function(res) {
                created_pdo = res.body;
                created_pdo.should.have.property('_id');
                created_pdo.course.should.equal(course._id.toString());
                created_pdo.school.should.equal(school._id.toString());
                created_pdo.program.should.equal(program._id.toString());
                done();
            })
            .
        catch (function(reason) {
            console.log('Error al crear PDO');
            console.log(reason);
            done();
        });
    });

    after(function(done) {
        if (typeof created_pdo !== 'undefined') {
            Pdo.findByIdAndRemove(created_pdo._id, function(err, res) {
                if (err) {
                    console.log('Failure');
                    console.log(err);
                    console.log(err.stack);
                }
                mongoose.connection.close();
                done();
            });
        } else {
            mongoose.connection.close();
            console.log('NO Borrando...');
            done();
        }

    });

});