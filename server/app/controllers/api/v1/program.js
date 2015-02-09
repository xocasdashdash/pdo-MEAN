'use strict';

var mongoose = require('mongoose');

var Program = mongoose.model('Program');
var Course = mongoose.model('Course');

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
        name: 'edit_program',
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
                program.school = req.body.school ?
                    mongoose.Types.ObjectId(req.body.school) : program.school;
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
        name: 'get_program_courses',
        path: '/:program_id/courses'
    }).get(function(req, res) {
        Course.find({
            program: req.params.program_id
        }).sort('name').exec(function(err, courses) {
            if (err) {
                res.send(err);
            }
            if (courses.length === 0) {
                var error = new Error();
                error.message = 'Courses not found';
                error.code = '404';
                res.status(404).send(error);
            }
            res.send(courses.map(function(course) {
                return (course.resource(req.route_gen));
            }));
        });
    });

    router({
        name: 'get_programs',
        path: '/'
    }).get(function(req, res) {
        Program.find({}, function(err, programs) {
            if (err) {
                res.send(err);
            }
            if (programs.length === 0) {
                var error = new Error();
                error.message = 'Programs not found';
                error.code = 404;
                res.status(404).send(error);
            }

            res.send(
                programs.map(function(program) {
                    return program.resource(req.route_gen);
                }));

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
            if (!program) {
                var error = new Error();
                error.message = 'Program not found';
                error.code = '404';
                res.status(404).send(error);
            }
            res.send(program.resource(req.route_gen));
        });
    });
    router({
        name: 'delete_program',
        path: '/:program_id'
    }).get(function(req, res) {
        Program.findOneAndRemove(
            req.params.program_id,
            function(err, removedDoc) {
                if (err) {
                    res.send(err);
                }
                if (!removedDoc) {
                    var error = new Error();
                    error.message = 'Program not found';
                    error.code = '404';
                    res.status(404).send(error);
                }
                res.status(200).send({
                    message: 'Removed',
                    type: 'success',
                    removedDoc: removedDoc
                });

            });
    });
};