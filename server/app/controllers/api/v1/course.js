'use strict';
var acl = require('../../../auth/acl');
var CourseService = require('../../../services/course.js');
module.exports = function(router) {
    router({
        name: 'create_course',
        path: '/',
        middleware: acl({
            level: 'super_secured'
        })
    }).post(function(req, res) {
        var courseData = {
            name: req.body.name,
            code: req.body.code
        }, programData = {
                code: req.body.program_code
            };
        CourseService.createCourse(courseData, programData).
        then(function(course) {
            res.send(course.resource(req.route_gen));
        }).
        catch (function(reason) {
            res.status(400).send(reason);
        });
    });
    router({
        name: 'get_courses',
        path: '/'
    }).get(function(req, res) {
        var from = req.query.createdOnBefore,
            limit = req.query.limit;
        CourseService.findCourses(limit, from).
        then(function(courses) {
            res.send(courses.map(function(course) {
                return course.resource(req.route_gen);
            }));
            return;
        }).
        catch (function(reason) {
            if (res.code) {
                res.status(res.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
            return;
        });
    });
    router({
        name: 'get_course',
        path: '/:course_id'
    }).get(function(req, res) {
        CourseService.getCourse(req.params.course_id).
        then(function(course) {
            res.send(course);
        }).
        catch (function(reason) {
            if (res.code) {
                res.status(res.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'edit_course',
        path: '/:course_id',
        middleware: acl({
            level: 'super_secured'
        })
    }).put(function(req, res) {
        CourseService.updateCourse(req.params.course_id, req.body).
        then(function(course) {
            res.send(course);
        }).
        catch (function(reason) {
            if (res.code) {
                res.status(res.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'delete_course',
        path: '/:course_id',
        middleware: acl({
            level: 'super_secured'
        })
    }).delete(function(req, res) {
        CourseService.deleteCourse(req.params.course_id).
        then(function(removedDoc) {
            res.status(200).send({
                message: 'Removed',
                type: 'success',
                removedDoc: removedDoc
            });
        }).
        catch (function(reason) {
            if (res.code) {
                res.status(res.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
};