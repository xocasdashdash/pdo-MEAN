'use strict';
var express = require('express'); // call express
var mongoose = require('mongoose');
var q = require('q');


var School = mongoose.model('School'),
    Pdo = mongoose.model('Pdo'),
    Course = mongoose.model('Course'),
    Program = mongoose.model('Program');

module.exports = function(router) {

    //Crear un pisado
    router({
        name: 'create_pdo',
        path: '/'
    }).post(function(req, res) {
        var pdo = new Pdo(),
            promise_array = [],
            deferred_school = q.defer(),
            deferred_course = q.defer(),
            deferred_program = q.defer();
        pdo.name = req.body.name;
        pdo.surname = req.body.surname;
        pdo.email = req.body.email;
        pdo.phone = req.body.phone;
        pdo.num_id = req.body.num_id;

        promise_array.push(deferred_school.promise);
        School.findOne({
            schoolname: req.body.school_name
        }, function(err, school) {
            if (err) {
                deferred_school.reject(err);
            }
            if (!school) {
                deferred_school.reject('No school found');
            }
            pdo.school = school;

            console.log('School');
            console.log(pdo);
            deferred_school.resolve(school);
        });

        promise_array.push(deferred_program.promise);
        Program.findOne({
            name: req.body.program_name
        }, function(err, program) {
            if (err) {
                deferred_program.reject(err);
            }
            if (!program) {
                deferred_program.reject('No program found');
            }
            pdo.program = program;
            console.log('program');
            console.log(pdo);
            deferred_program.resolve(program);
        });

        promise_array.push(deferred_course.promise);
        Course.findOne({
            name: req.body.course_name
        }, function(err, course) {
            if (err) {
                deferred_course.reject(err);
            }
            if (!course) {
                deferred_course.reject('No course found');
            }
            pdo.course = course;
            console.log('Curso');
            console.log(pdo);
            deferred_course.resolve(course);
        });
        q.all(promise_array).then(function(results) {
            for (var i = results.length - 1; i >= 0; i--) {
                console.log(results[i]);
            }
            pdo.save(function(err) {
                console.log(pdo);
                console.log(err);
                if (err) {
                    res.send(err);
                }
                res.json(pdo);
            });
        }).fail(function(reason) {
            console.log('Promesa rechazada');
            var err = new Error();
            err.message = reason;
            res.send(err);
        });
    });
};