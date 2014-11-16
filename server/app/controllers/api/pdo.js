'use strict';
var express = require('express'); // call express
var mongoose = require('mongoose');
var q = require('q');


var School = mongoose.model('School');
var Pdo = mongoose.model('Pdo');

module.exports = function(router) {

    //Crear un pisado
    router({
        name: 'create_pdo',
        path: '/'
    }).post(function(req, res) {
        var pdo = new Pdo(),
            promise_array = [];
        pdo.name = req.body.name;
        pdo.surname = req.body.surname;
        pdo.email = req.body.email;
        pdo.phone = req.body.phone;
        pdo.num_id = req.body.num_id;

        var deferred_school = q.defer();
        School.findOne({
            schoolname: req.body.schoolname
        }, function(err, school) {
            if (err) {
                deferred_school.reject(err);
                res.send(err);
            }
            pdo.school = school;
            deferred_school.resolve(school);
            pdo.save(function(err) {
                console.log(err);
                if (err) {
                    res.send(err);
                }
                res.json(pdo);

            });
        });
    });
    app.use('/pdo', router);
};