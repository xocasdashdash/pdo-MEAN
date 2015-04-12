'use strict';
var q = require('q');
var mongoose = require('mongoose');
var Program = mongoose.model('Program');
var Course = mongoose.model('Course');
var ProgramService = {};
ProgramService.createProgram = function(program) {
    var newProgram = new Program();
    var defer = q.defer();
    newProgram.name = program.name;
    newProgram.url = program.url;
    newProgram.email = program.email;
    newProgram.code = program.code;
    newProgram.save(function(err) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(newProgram);
        }
    });
    return defer.promise;
};
ProgramService.editProgram = function(programId, program) {
    var defer = q.defer();
    Program.
    findByIdAndUpdate(programId, program, function(err, updatedProgram) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(updatedProgram);
        }
    });
    return defer.promise;
};
ProgramService.getPrograms = function() {
    var defer = q.defer();
    Program.find({}, function(err, programs) {
        if (err) {
            defer.reject(err);
        } else if (programs.length === 0) {
            var error = new Error();
            error.message = 'Programs not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(programs);
        }
    });
    return defer.promise;
};
ProgramService.getProgram = function(programId) {
    var defer = q.defer();
    Program.findById(programId, function(err, program) {
        if (err) {
            defer.reject(err);
        } else if (!program) {
            var error = new Error();
            error.message = 'Program not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(program);
        }
    });
    return defer.promise;
};
ProgramService.deleteProgram = function(programId){
    var defer = q.defer();
    Program.findOneAndRemove(programId, function(err, removedProgram) {
        if (err) {
            defer.reject(err);
        } else if (!removedProgram) {
            var error = new Error();
            error.message = 'Program not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(removedProgram);
        }
    });
    return defer.promise;	
};

ProgramService.getCourses = function(programId) {
    var defer = q.defer();
    Course.find({
        program: programId
    }).sort('name').exec(function(err, courses) {
        if (err) {
            defer.reject(err);
        } else
        if (courses.length === 0) {
            var error = new Error();
            error.message = 'Courses not found';
            error.code = '404';
            defer.reject(error);
        } else {
            defer.resolve(courses);
        }
    });
    return defer.promise;
};
module.exports = ProgramService;