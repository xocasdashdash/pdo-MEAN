'use strict';
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');
var LoginService = {};
LoginService.login = function(req, res, next) {
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
            expiresInMinutes: 60 * 60 * 5
        });
        res.json({
            token: token
        });
    })(req, res, next);
};

module.exports = LoginService;