'use strict';
var mongoose = require('mongoose');
var School = mongoose.model('School');
var Program = mongoose.model('Program');
var q = require('q');
var SchoolService = {};
SchoolService.createSchool = function(newSchool) {
    var school = new School();
    var defer = q.defer();
    school.schoolname = newSchool.schoolname;
    school.url = newSchool.url;
    school.email = newSchool.email;
    school.save(function(err) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(school);
        }
    });
    return defer.promise;
};
SchoolService.getSchoolPrograms = function(schoolId) {
    var defer = q.defer();
    Program.find({
        school: schoolId
    }, function(err, programs) {
        if (err) {
            defer.reject(err);
        } else if (programs.length === 0) {
            var error = new Error();
            error.message = 'Programs not found';
            error.code = '404';
            defer.reject(error);
        } else {
            defer.resolve(programs);
        }
    });
    return defer.promise;
};
SchoolService.getSchools = function(limit, from) {
    var defer = q.defer();
    School.find({
        created_on: {
            $lte: from
        }
    }).sort('-createdOn').limit(limit).exec(function(err, schools) {
        if (err) {
            defer.reject(err);
        } else if (schools.length === 0) {
            var error = new Error();
            error.message = 'Schools not found';
            error.code = '404';
            defer.reject(error);
        } else {
            defer.resolve(schools);
        }
    });
    return defer.promise;
};
SchoolService.getSchool = function(schoolId) {
    var defer = q.defer();
    School.findById(schoolId, function(err, school) {
        if (err) {
            defer.reject(school);
        } else if (!school) {
            var error = new Error();
            error.message = 'School not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(school);
        }
    });
    return defer.promise;
};
SchoolService.editSchool = function(schoolId, newSchoolData) {
    var defer = q.defer();
    School.findByIdAndUpdate(schoolId, {
        $set: newSchoolData
    }, function(err, school) {
        if (err) {
            defer.reject(err);
        } else if (!school) {
            var error = new Error();
            error.message = 'School not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(school);
        }
    });
    return defer.promise;
};
SchoolService.deleteSchool = function(schoolId) {
    var defer = q.defer();
    School.findByIdAndRemove(schoolId, function(err, removedDoc) {
        if (err) {
            defer.reject(err);
        } else if (!removedDoc) {
            var error = new Error();
            error.message = 'School not found';
            error.code = '404';
            defer.reject(error);
        } else {
            defer.resolve(removedDoc);
        }
    });
    return defer.promise;
};