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
            res.json(school);
        });
    });
    router({
        name: 'get_schools',
        path: '/'
    }).get(function(req, res) {
        var response = [];
        School.find({}, function(err, school) {
            var resp;
            if (err) {
                res.send(err);
            }
            for (var i = school.length - 1; i >= 0; i--) {
                resp = school[i].toObject();
                resp.schools = {};
                resp.schools.link = req.app.locals.enrouten.path('schools', '');
                resp._self = {};
                resp._self.href = req.app.locals.enrouten.path('school', {
                    school_id: school._id
                });
                response.push(resp);
            }
            res.json(response);
        });
    });


    router({
        name: 'get_school',
        path: '/:school_id'
    }).get(function(req, res) {

        School.findById(req.params.school_id, function(err, school) {
            var resp;
            if (err) {
                res.send(err);
            }
            resp = school.toObject();
            resp.schools = {};
            resp.schools.link = req.app.locals.enrouten.path('get_schools', '');
            resp._self = {};
            resp._self.href = req.app.locals.enrouten.path('get_school', {
                school_id: school._id
            });
            res.json(resp);
        });
    });
    router({
        name: 'school_edit',
        path: '/:school_id/edit'
    }).put(function(req, res) {
        School.findById(req.params.school_id, function(err, school) {
            if (err) {
                res.send(err);
            }
            if (school === null) {
                var error = new Error();
                error.status = 404;
                error.message = 'Escuela no encontrada';
                res.send(error);
            } else {
                school.schoolname = req.body.schoolname ? req.body.schoolname : school.schoolname;
                school.email = req.body.email ? req.body.email : school.email;
                school.url = req.body.url ? req.body.url : school.url;
                school.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(school);
                });
            }

        });
    });
};