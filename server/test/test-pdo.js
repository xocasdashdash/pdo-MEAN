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
    var number_of_calls = 0,
        number_of_pdo;
    var created_comment_id;
    var token = {
        'Authorization': ''
    };
    var test_user = {
        username: 'joaquin.fernandez+schoolAdmin@edu.uah.es',
        password: '1234'
    };
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
                Pdo.find({}).exec(),
                request(url).
                post('/api/v1/login').
                send(test_user)
            ]).then(function(results) {
                program = results[0];
                school = results[1];
                course = results[2];
                number_of_pdo = results[3].length;
                token.Authorization = results[4].body.token;
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
        pdo.school = school;
        pdo.program = program;
        pdo.course = course;
        pdo.title = "TITULO DEL PDO ";
        pdo.text = "TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO ";
        request(url).post('/api/v1/pdo').send(pdo).expect('Content-Type', /json/).expect(200).then(function(res) {
            created_pdo = res.body;
            created_pdo.should.have.property('_id');
            created_pdo.course.should.equal(course._id.toString());
            created_pdo.school.should.equal(school._id.toString());
            created_pdo.program.should.equal(program._id.toString());
            done();
        }).
        catch (function(reason) {
            console.log('Error al crear PDO');
            console.log(reason);
            if (reason.actual) {
                console.log(reason.actual);
            }
            done(reason);
        });
    });
    it('should have increased PDO length by one', function(done) {
        Pdo.find({}, function(err, pdos) {
            if (err) {
                done(err);
                return;
            }
            pdos.should.not.have.length(number_of_pdo);
            expect(pdos).to.have.length(number_of_pdo + 1);
            done();
            return;
        });
    });
    it('should add a comment to a pdo', function(done) {
        var comment = {};
        comment.text = faker.lorem.paragraphs();
        comment.title = 'Titulo del comentario ' + faker.random.number();
        request(url).
        put('/api/v1/pdo/' + created_pdo._id + '/comment').
        set(token).
        send(comment).expect('Content-Type', /json/).expect(200).then(function(res) {
            var pdo = res.body;
            pdo.should.have.property('comments').with.length(1);
            pdo.comments[0].text.should.equal(comment.text);
            pdo.comments[0].title.should.equal(comment.title);
            done();
        }).
        catch (function(reason) {
            console.log('Error al añadir comentario.', reason);
            done(reason);
        });
    });
    it('should have one comment', function(done) {
        request(url).
        get('/api/v1/pdo/' + created_pdo._id + '/comment').
        set(token).
        expect('Content-Type', /json/).
        expect(200).
        then(function(res) {
            //console.log(res.body);
            res.should.have.property('body').with.length(1);
            created_comment_id = res.body[0]._id;
            done();
        }).
        catch (function(reason) {
            console.log('Error al comprobar el numero de  comentarios.', reason);
            done(reason);
        });
    });
    it('should remove a comment', function(done) {
        request(url).
        delete('/api/v1/pdo/' + created_pdo._id + '/comment/' + created_comment_id).
        set(token).
        expect('Content-Type', /json/).
        expect(200).
        then(function(res) {
            res.body.should.have.property('comments').with.length(0);
            done();
        }).
        catch (function(reason) {
            console.log('Error al borrar comentario.', reason);
            done(reason);
        });
    });
    it('should not add a comment if it doesn\'t have text', function(done) {
        var bad_comment = {};
        bad_comment.title = 'Titulo del comentario ' + faker.random.number();
        request(url).
        put('/api/v1/pdo/' + created_pdo._id + '/comment').
        set(token).
        send(bad_comment).
        expect('Content-Type', /json/).
        expect(400).
        then(function(res) {
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
        put('/api/v1/pdo/' + created_pdo._id + '/comment').
        set(token).
        send(bad_comment).
        expect('Content-Type', /json/).expect(400).then(function(res) {
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
        put('/api/v1/pdo/' + created_pdo._id + '/comment').
        set(token).
        send(bad_comment).
        expect('Content-Type', /json/).
        expect(400).then(function(res) {
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
        put('/api/v1/pdo/' + created_pdo._id + '/comment').
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
    it('should reject a PDO', function(done) {
        request(url).
        put('/api/v1/pdo/' + created_pdo._id + '/reject').
        set(token).
        send({}).
        expect('Content-Type', /json/).
        expect(200).
        then(function(res) {
            res.body.status.should.equal('STATUS_REJECTED');
            done();
        }).
        catch (function(reason) {
            done(reason);
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
                request(url).
                post('api/v1/login/logout').
                send({}).then(function(res) {
                    done();
                }).
                catch (function(reas) {
                    done(reason);
                });
            });
        } else {
            mongoose.connection.close();
            console.log('NO Borrando...');
            done();
        }
    });
});