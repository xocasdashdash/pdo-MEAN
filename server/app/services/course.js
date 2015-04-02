'use strict';
var mongoose = require('mongoose');
var Course = mongoose.model('Course'),
    Program = mongoose.model('Program');
var logger = require('../log/log.js');
var CourseService = {};
var q = require('q');
CourseService.createCourse = function(newCourseData, programData, callback) {
    var course = new Course();
    var defer = q.defer();
    course.name = newCourseData.name;
    course.code = newCourseData.code;
    Program.findOne({
        code: programData.code
    }, function(err, program) {
        if (err) {
            defer.reject(err);
        }
        if (!program) {
            logger.log('Program not found');
            var error = new Error();
            error.message = 'No se ha encontrado ese programa';
            error.code = '404';
            error.name = 'PROGRAM_NOT_FOUND';
            defer.reject(err);
        } else {
            course.program = program;
            course.save(function(err) {
                if (err) {
                    defer.reject(err);
                } else {
                    defer.resolve(course);
                }
            });
        }
    });
    return defer.promise;
};
CourseService.findCourses = function(optionalLimit, optionalStartTime, optionalSortCriteria) {
    var courses = [];
    var limit = optionalLimit || 10;
    var sortCriteria = optionalSortCriteria || '-createdOn';
    var from = optionalStartTime || Math.floor(Date.now() / 1000);
    var defer = q.defer();
    Course.find({
        created_on: {
            $lte: from
        }
    }).sort(sortCriteria).limit(limit).exec(function(err, courses) {
        if (err || courses.length === 0) {
            if (err) {
                defer.reject(err);
            } else {
                var error = new Error();
                error.message = 'Course not found';
                error.code = '404';
                defer.reject(error);
            }
        } else {
            defer.resolve(courses);
        }
    });
    return defer.promise;
};
CourseService.getCourse = function(courseId) {
    var defer = q.defer();
    Course.findById(courseId, function(err, course) {
        if (err) {
            defer.reject(err);
        }
        defer.resolve(course);
    });
    return defer.promise;
};
CourseService.updateCourse = function(courseId, course) {
    var defer = q.defer();
    Course.findByIdAndUpdate(courseId, {
        $set: course
    }, function(err, course) {
        if (err) {
            defer.reject(err);
        } else if (!course) {
            var error = new Error();
            error.message = 'Course not found';
            error.code = 404;
            defer.reject(err);
        } else {
            defer.resolve(course);
        }
    });
    return defer.promise;
};
CourseService.deleteCourse = function(courseId) {
    var defer = q.defer();
    Course.findByIdAndRemove(courseId, function(err, removedDoc) {
        if (err) {
            defer.reject(err);
        } else if (!removedDoc) {
            var error = new Error();
            error.message = 'Course not found';
            error.code = '404';
            defer.reject(error);
        } else {
            defer.resolve(removedDoc);
        }
    });
    return defer.promise;
};