'use strict';
var mongoose = require('mongoose');
var Course = mongoose.model('Course'),
    Program = mongoose.model('Program');
var acl = require('../../../auth/acl');
module.exports = function(router) {
    router({
        name: 'create_course',
        path: '/',
        middleware: acl({
            level: 'super_secured'
        })
    }).post(function(req, res) {
        var course = new Course();
        course.name = req.body.name;
        course.code = req.body.code;
        Program.findOne({
            code: req.body.program_code
        }, function(err, program) {
            if (err) {
                res.send(err);
            }
            if (!program) {
                console.log(req.body);
                var error = new Error();
                error.message = 'No se ha encontrado ese programa';
                error.code = '404';
                error.name = 'PROGRAM_NOT_FOUND';
                res.send(error);
            } else {
                course.program = program;
                course.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    res.send(course.resource(req.route_gen));
                });
            }
        });
    });

    router({
        name: 'get_courses',
        path: '/'
    }).get(function(req, res) {
        var from = req.query.createdOnBefore,
            limit = req.query.limit;

        Course.find({
            created_on: {
                $lte: from
            }
        }).sort('-createdOn')
            .limit(limit).exec(function(err, courses) {
                if (err) {
                    res.send(err);
                }
                if (courses.length === 0) {
                    var error = new Error();
                    error.message = 'Course not found';
                    error.code = '404';
                    res.status(404);
                    res.send(error);
                }
                res.send(courses.map(function(course) {
                    return course.resource(req.route_gen);
                }));
            });
    });

    router({
        name: 'get_course',
        path: '/:course_id'
    }).get(function(req, res) {
        Course.findById(
            req.params.course_id,
            function(err, course) {
                if (err) {
                    res.send(err);
                }
                res.send(course.resource(req.route_gen));
            });
    });
    router({
        name: 'edit_course',
        path: '/:course_id',
        middleware: acl({
            level: 'super_secured'
        })
    }).put(function(req, res) {
        Course.findByIdAndUpdate(
            req.params.course_id, {
                $set: req.body
            }, function(err, course) {
                if (err) {
                    res.send(err);
                }
                if (!course) {
                    var error = new Error();
                    error.message = 'Course not found';
                    res.status(404).send(error);
                }
                res.send(course.resource(req.route_gen));
            });
    });

    router({
        name: 'delete_course',
        path: '/:course_id',
        middleware: acl({
            level: 'super_secured'
        })
    }).delete(function(req, res) {
        Course.findByIdAndRemove(
            req.params.course_id, function(err, removedDoc) {
                if (err) {
                    res.send(err);
                }
                if (!removedDoc) {
                    var error = new Error();
                    error.message = 'Course not found';
                    error.code = '404';
                    res.status(400).send(error);
                }
                res.status(200).send({
                    message: 'Removed',
                    type: 'success',
                    removedDoc: removedDoc
                });
            });
    });




};