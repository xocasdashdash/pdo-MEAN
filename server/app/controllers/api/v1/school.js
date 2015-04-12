'use strict';
var SchoolService = require('../../../services/school');
var acl = require('../../../auth/acl');
module.exports = function(router) {
    router({
        name: 'create_school',
        path: '/',
        middleware: acl({
            level: 'super_secured'
        })
    }).post(function(req, res) {
        SchoolService.createSchool(req.body).
        then(function(school) {
            res.send(school.resource(req.route_gen));
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
        name: 'get_schools',
        path: '/'
    }).get(function(req, res) {
        var from = req.query.createdOnBefore,
            limit = req.query.limit;
        SchoolService.getSchools(limit, from).
        then(function(schools) {
            res.send(schools.map(function(school) {
                return school.resource(req.route_gen);
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
        name: 'get_school',
        path: '/:school_id'
    }).get(function(req, res) {
        SchoolService.getSchool(req.params.school_id).
        then(function(school) {
            res.send(school.resource(req.route_gen));
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
        name: 'get_school_programs',
        path: '/:school_id/programs'
    }).get(function(req, res) {
        SchoolService.getSchoolPrograms(req.params.school_id).
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
        name: 'edit_school',
        path: '/:school_id'
    }).put(acl({
        level: 'super_secured'
    }), function(req, res) {
        SchoolService.editSchool(req.params.school_id, req.body).
        then(function(updatedSchool) {
            res.send(updatedSchool.resource(req.route_gen));
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
        name: 'delete_school',
        path: '/:school_id'
    }).delete(acl({
        level: 'super_secured'
    }), function(req, res) {
        SchoolService.deleteSchool(req.params.school_id).
        then(function(removedSchool) {
            res.send(removedSchool.resource(req.route_gen));
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