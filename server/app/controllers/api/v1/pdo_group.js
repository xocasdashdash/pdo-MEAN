'use strict';
var express = require('express'); // call express
var mongoose = require('mongoose');
var q = require('q');

var Pdo = mongoose.model('Pdo'),
    PdoGroup = mongoose.model('PdoGroup');

module.exports = function(router) {
    router({
        name: 'create_pdo_group',
        path: '/'
    }).post(function(req, res) {
        var pdo_group = new PdoGroup(),
            pdo_ids = [];
        pdo_group.title = req.body.title;
        pdo_group.summary = req.body.summary;
        pdo_ids = JSON.parse(req.body.pdos).map(
            function(pdo) {
                console.log(pdo);
                return mongoose.Types.ObjectId(pdo);
            });
        pdo_group.pdos = pdo_ids;
        pdo_group.save(function(err, pdo_group) {
            if (err) {
                res.send(err);
                return;
            }
            res.send(pdo_group.resource(req.route_gen));
        });
    });

    router({
        name: 'add_comment',
        path: '/:pdo_group_id/comment'
    }).post(function(req, res) {
        var comment = {
            title: req.body.title,
            text: req.body.text
        };
        console.log(comment);
        res.send(comment);
    });

    router({
        name: 'get_comment',
        path: '/comments/:comment_id'
    }).get(function(req, res) {

    });

    router({
        name: 'delete_comment',
        path: '/comments/:comment_id'
    }).delete(function(req, res) {

    });

    router({
        name: 'get_pdo_group',
        path: '/:pdo_group_id'
    }).get(function(req, res) {

    });

    router({
        name: 'delete_group',
        path: '/:pdo_group_id'
    }).delete(function(req, res) {

    });
};