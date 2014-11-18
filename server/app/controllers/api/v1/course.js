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
    }).post(function(req, res) {
        var response = [];
        Program.find({});

    });

    router({
        name: 'get_course',
        path: '/:course_id'
    }).get(function(req, res) {

    });
    router({
        name: 'edit_course',
        path: '/:course_id'
    }).put(function(req, res) {

    });
    router({
        name: 'delete_course',
        path: '/:course_id'
    }).delete(function(req, res) {

    });




};