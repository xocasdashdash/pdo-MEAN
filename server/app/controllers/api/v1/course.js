'use strict';
var express = require('express'); // call express
var mongoose = require('mongoose');
var q = require('q');
var hal = require('hal');


var School = mongoose.model('School'),
    Pdo = mongoose.model('Pdo'),
    Course = mongoose.model('Course'),
    Program = mongoose.model('Program');

module.exports = function(router) {
    router({
        name: 'create_course',
        path: '/'
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
                    course.resource(req.route_gen).then(function(resp) {
                        res.json(resp);
                    });

                });
            }
        });
    });

    router({
        name: 'get_courses',
        path: '/'
    }).get(function(req, res) {
        var from = req.query.createdOnBefore ? req.query.createdOnBefore : Date.now(),
            limit = req.query.limit;
        var response = [];

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
                courses.forEach(function(course) {
                    response.push(course.resource(req.route_gen));
                });
                res.send(response);
            });
    });

    router({
        name: 'get_course',
        path: '/:course_id'
    }).get(function(req, res) {
        Course.findOne({
            _id: req.params.course_id
        }, function(err, course) {
            if (err) {
                res.send(err);
            }
            console.log(course);
            res.send(course.resource(req.route_gen));
        });
    });
    router({
        name: 'edit_course',
        path: '/:course_id'
    }).patch(function(req, res) {
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
        path: '/:course_id'
    }).delete(function(req, res) {

    });




};