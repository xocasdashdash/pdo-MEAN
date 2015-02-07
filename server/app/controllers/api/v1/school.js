'use strict';

var express = require('express'); // call express
var mongoose = require('mongoose');
var _ = require('underscore');

var School = mongoose.model('School');
var Program = mongoose.model('Program');

module.exports = function(router) {

    router({
        name: 'create_school',
        path: '/'
    }).post(function(req, res) {
        var school = new School();
        school.schoolname = req.body.schoolname;
        school.url = req.body.url;
        school.email = req.body.email;
        school.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.send(school.resource(req.route_gen));
        });
    });

    router({
        name: 'get_schools',
        path: '/'
    }).get(function(req, res) {
        var from = req.query.createdOnBefore,
            limit = req.query.limit;
        console.log('Peticion recibida!');
        School.find({
            created_on: {
                $lte: from
            }
        }).sort('-createdOn')
            .limit(limit).exec(function(err, schools) {
                if (err) {
                    res.send(err);
                }
                if (schools.length === 0) {
                    var error = new Error();
                    error.message = 'Schools not found';
                    error.code = '404';
                    res.status(404);
                    res.send(error);
                }
                res.send(schools.map(function(school) {
                    return school.resource(req.route_gen);
                }));
            });
    });


    router({
        name: 'get_school',
        path: '/:school_id'
    }).get(function(req, res) {

        School.findById(
            req.params.school_id,
            function(err, school) {
                var resp;
                if (err) {
                    res.send(err);
                    return;
                }
                if (!school) {
                    var error = new Error();
                    error.message = 'School not found';
                    error.code = '404';
                    res.status(error.code).send(error);
                    return;
                }
                res.send(school.resource(req.route_gen));
                return;
            });
    });

    router({
        name: 'get_school_programs',
        path: '/:school_id/programs'
    }).get(function(req, res) {
        Program.find({
            school: req.params.school_id
        }, function(err, programs) {
            if (err) {
                res.send(err);
            }
            if (programs.length === 0) {
                var error = new Error();
                error.message = 'Programs not found';
                error.code = '404';
                res.status(404).send(error);
            }
            res.send(
                programs.map(function(program) {
                    return program.resource(req.route_gen);
                })
            );

        });
    });

    router({
        name: 'edit_school',
        path: '/:school_id'
    }).patch(function(req, res) {
        School.findByIdAndUpdate(
            req.params.school_id, {
                $set: req.body
            },
            function(err, school) {
                if (err) {
                    res.send(err);
                    return;
                }
                if (!school) {
                    var error = new Error();
                    error.message = 'School not found';
                    res.status(404).send(error);
                    return;
                }
                res.send(school.resource(req.route_gen));
            });
    });

    router({
        name: 'delete_school',
        path: '/:school_id'
    }).delete(function(req, res) {
        School.findByIdAndRemove(
            req.params.school_id, function(err, removedDoc) {
                if (err) {
                    res.send(err);
                }
                if (!removedDoc) {
                    var error = new Error();
                    error.message = 'School not found';
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