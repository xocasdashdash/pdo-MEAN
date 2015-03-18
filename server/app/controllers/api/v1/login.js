'use strict';
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../../../../config/config.js');
module.exports = function(router) {
    router({
        name: 'basic_login',
        path: '/'
    }).get(function(req, res) {
        //Devuelve el formulario 
        var resp = {};
        resp.url = req.headers.host;
        resp.schools = req.route_gen.path('get_schools');
        resp.pdo = req.route_gen.path('create_pdo') +
            '?limit=10&createdOnBefore=' + Math.floor(new Date().getTime() / 1000);
        resp.programs = req.route_gen.path('get_programs') +
            '?limit=10&createdOnBefore=' + Math.floor(new Date().getTime() / 1000);
        resp.courses = req.route_gen.path('get_courses') +
            '?limit=10&createdOnBefore=' + Math.floor(new Date().getTime() / 1000);
        res.send(resp);
    });

    router({
        name: 'login',
        path: '/'
    }).post(function(req, res, next) {
        passport.authenticate('local', function(err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json(401, {
                    error: 'Bad credentials'
                });
            }

            // We are sending the profile inside the token
            var token = jwt.sign(user, config.tokenSecret, {
                expiresInMinutes: 60 * 5
            });

            res.json({
                token: token
            });

        })(req, res, next);
    });
};