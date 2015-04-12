'use strict';
var acl = require('../../../auth/acl');
var ProgramService = require('../../../services/program.js');
module.exports = function(router) {
    router({
        name: 'create_program',
        path: '/'
    }).post(acl({
        level: 'super_secured'
    }), function(req, res) {
        ProgramService.createProgram(req.body).
        then(function(program) {
            res.send(program);
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'edit_program',
        path: '/:program_id'
    }).put(acl({
        level: 'super_secured'
    }), function(req, res) {
        ProgramService.editProgram(req.params.program_id, req.body).
        then(function(updatedProgram) {
            res.send(updatedProgram.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'get_program_courses',
        path: '/:program_id/courses'
    }).get(function(req, res) {
        ProgramService.getCourses(req.params.program_id).
        then(function(courses) {
            res.send(courses.map(function(course) {
                return course.resource(req.route_gen);
            }));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'get_programs',
        path: '/'
    }).get(acl({
        level: 'super_secured'
    }), function(req, res) {
        ProgramService.getPrograms().
        then(function(programs) {
            res.send(programs.map(function(program) {
                return program.resource(req.route_gen);
            }));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'get_program',
        path: '/:program_id'
    }).get(function(req, res) {
        ProgramService.getProgram(req.params.program_id).
        then(function(program) {
            res.send(program.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'delete_program',
        path: '/:program_id'
    }).delete(acl({
        level: 'super_secured'
    }), function(req, res) {
        ProgramService.deleteProgram(req.params.program_id).
        then(function(program) {
            res.send(program.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
};