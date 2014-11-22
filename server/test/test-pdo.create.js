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
    
    before(function(done) {
        var dbURI = 'mongodb://gestor:gestor1234@localhost/mean-pdo';
        mongoose.connect(dbURI); // connect to our database
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
            school = results[1];
            program = results[0];
            course = results[2];
            done();
        }).
        catch (function(reason) {
            console.log('Error!' + reason); 
            done(reason);
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
        request('http://localhost:8081')
            .post('/api/v1/pdo').send(pdo).
        expect('Content-Type', /json/).
        expect(200).
        end(function(err, res) {
            if (err) {
                throw err;
            }
            created_pdo = res.body;
            created_pdo.should.have.property('_id');
            created_pdo.course.should.equal(course._id.toString());
            created_pdo.school.should.equal(school._id.toString());
            created_pdo.program.should.equal(program._id.toString());
            done();
        });  
    });

    after(function(done) {
        if (typeof created_pdo !== 'undefined') {
            console.log('Borrando...');
            Pdo.findByIdAndRemove(created_pdo._id).exec(done);
        } else {
            console.log('NO Borrando...');
            done();
        }
    });

});