'use strict';

var express = require('express'); // call express
var mongoose = require('mongoose');

var School = mongoose.model('School');
var Program = mongoose.model('Program');

module.exports = function(router) {

    router({
        name: 'create_program',
        path: '/'
    }).post(function(req, res) {
        var program = new Program();
        program.name = req.body.programname;
        program.url = req.body.url;
        program.email = req.body.email;
        program.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json(program);
        });
    });


    router({
        name: 'program_edit',
        path: '/:program_id/edit'
    }).put(function(req, res) {
        Program.findById(req.params.program_id, function(err, program) {
            if (err) {
                res.send(err);
            }
            if (program === null) {
                var error = new Error();
                error.status = 404;
                error.message = 'Programa no encontrado';
                res.send(error);
            } else {
                program.name = req.body.name ? req.body.name : program.name;
                program.code = req.body.code ? req.body.code : program.code;
                program.school = req.body.school ? mongoose.Types.ObjectId(req.body.school) : program.school;
                program.save(function(err) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(program);
                });
            }

        });
    });

    router({
        name: 'get_programs',
        path: '/'
    }).get(function(req, res) {
        var response = [];
        Program.find({}, function(err, programs) {
            if (err) {
                res.send(err);
            }
            var resp;
            for (var i = programs.length - 1; i >= 0; i--) {
                resp = programs[i].toObject();
                resp.programs = {};
                resp.programs.link = req.app.locals.enrouten.path('get_programs', '');
                resp._self = {};
                resp._self.href = req.app.locals.enrouten.path('get_program', {
                    program_id: programs[i]._id
                });
                response.push(resp);
            }
            res.json(response);
        });
    });

    router({
        name: 'get_program',
        path: '/:program_id'
    }).get(function(req, res) {
        Program.findById(req.params.program_id, function(err, program) {
            if (err) {
                res.send(err);
            }
            var resp = program.toObject();

            resp.programs = {};
            resp.programs.link = req.app.locals.enrouten.path('get_programs', '');
            resp._self = {};
            resp._self.href = req.app.locals.enrouten.path('get_program', {
                program_id: program._id
            });
            res.json(resp);
        });
    });
};