'use strict';
var express = require('express'); // call express
var mongoose = require('mongoose');
var q = require('q');


var School = mongoose.model('School'),
    Pdo = mongoose.model('Pdo'),
    Course = mongoose.model('Course'),
    Program = mongoose.model('Program'),
    PdoGroup = mongoose.model('PdoGroup'),
    PdoComment = mongoose.model('PdoComment');

module.exports = function(router) {

    //Crear un pisado
    router({
        name: 'create_pdo',
        path: '/'
    }).post(function(req, res) {
        var pdo = new Pdo(),
            promise_array = [],
            deferred_school = q.defer(),
            deferred_course = q.defer(),
            deferred_program = q.defer();
        pdo.name = req.body.name;
        pdo.surname = req.body.surname;
        pdo.email = req.body.email;
        pdo.phone = req.body.phone;
        pdo.num_id = req.body.num_id;
        pdo.title = req.body.title;
        pdo.text = req.body.text;

        promise_array.push(deferred_school.promise);
        School.findOne({
            schoolname: req.body.school.schoolname
        }, function(err, school) {
            if (err) {
                deferred_school.reject(err);
            }
            if (!school) {
                console.log(req.body);
                deferred_school.reject(
                    'No school found with[' + req.body.school_name + ']');
            }
            pdo.school = school;
            deferred_school.resolve(school);
        });

        promise_array.push(deferred_program.promise);
        Program.findOne({
            code: req.body.program.code
        }, function(err, program) {
            if (err) {
                deferred_program.reject(err);
            }
            if (!program) {
                deferred_program.reject('No program found');
            }
            pdo.program = program;
            deferred_program.resolve(program);
        });

        promise_array.push(deferred_course.promise);
        Course.findOne({
            code: req.body.course.code
        }, function(err, course) {
            if (err) {
                deferred_course.reject(err);
            }
            if (!course) {
                deferred_course.reject('No course found');
            }
            pdo.course = course;
            deferred_course.resolve(course);
        });
        q.all(promise_array).then(function(results) {
            pdo.save(function(err) {
                if (err) {
                    res.send(err);
                }
                //Enviar e-mail a la persona responsable del centro
                //Enviar notificación al movil por el sistema de google/apple
                res.json(pdo);
            });
        }).fail(function(reason) {

            console.log('Promesa rechazada');
            var err = new Error();
            err.message = reason;
            res.send(err);
        });
    });

    router({
        name: 'add_comment_pdo',
        path: '/:pdo_id/comment',
    }).post(function(req, res) {
        var pdo_comment = new PdoComment();
        pdo_comment.title = req.body.title;
        pdo_comment.text = req.body.text;
        Pdo.findByIdAndUpdate(req.params.pdo_id, {
            $push: {
                comments: pdo_comment
            }
        }, function(err, pdo) {
            if (err) {
                res.send(err);
                return;
            }
            if (!pdo) {
                var error = new Error();
                error.message = 'Pdo not found';
                error.code = 404;
                res.status(error.code).send(error);
                return;
            }
            res.send(pdo.resource(req.route_gen));
            return;
        });
    });

    router({
        name: 'get_pdo_comments',
        path: '/:pdo_id/comment'
    }).get(function(req, res) {
        var pdo_comments, promise_array = [];
        var promPdoComments = q.defer(),
            promPdoGroupComments = q.defer();
        promise_array[0] = promPdoComments.promise;
        promise_array[1] = promPdoGroupComments.promise;
        Pdo.findById(req.params.pdo_id,
            function(err, pdo) {
                console.log('Buscando pdo', req.params.pdo_id);
                if (err) {
                    res.send(err);
                    return;
                }
                console.log('sin errores');
                if (!pdo) {
                    var error = new Error();
                    error.message = 'Pdo not found';
                    error.code = 404;
                    promPdoComments.reject(error);
                    return;
                }
                console.log('Comprobando comentarios');
                if (pdo.comments.length === 0) {
                    console.log('Sin comentarios');
                    var error_no_comments = new Error();
                    error_no_comments.message = 'No comments found';
                    error_no_comments.code = 404;
                    promPdoComments.reject(error_no_comments);
                    return;
                }
                console.log('Comentarios cargados!');

                promPdoComments.resolve(
                    pdo.comments
                );
                //res.send(pdo.resource(req.route_gen));
                if (pdo.pdo_group) {
                    console.log('has group');
                    PdoGroup.findById(pdo.pdo_group, function(err, pdo_group) {
                        if (err) {
                            promPdoGroupComments.reject(err);
                            return;
                        }
                        if (!pdo_group) {
                            promPdoGroupComments.resolve();
                            return;
                        }
                        promPdoGroupComments.resolve(
                            pdo_group.comments
                        );
                    });
                } else {
                    promPdoGroupComments.resolve([]);
                }
                q.all(promise_array).spread(function(pdo_comments, pdo_group_comments) {
                    var respuesta = [];
                    console.log('pdo_comments', pdo_comments);
                    console.log('pdo_group_comments', pdo_group_comments);

                    function compare(a, b) {
                        if (a.date_created > b.date_created)
                            return -1;
                        if (a.date_created < b.date_created)
                            return 1;
                        return 0;
                    }
                    respuesta = respuesta.concat(pdo_comments);
                    respuesta = respuesta.concat(pdo_group_comments);
                    res.send(respuesta.sort(compare));
                    return;
                }).fail(function(reason) {
                    console.log('Promesa rechazada');
                    var err = new Error();
                    err.message = reason;
                    res.send(err);
                    return;
                });

            });
    });
};