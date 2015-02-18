'use strict';
var jwt = require('jsonwebtoken');
var config = require('./config/config');
var expressJwt = require('express-jwt');

module.exports = expressJwt({
    secret: config.tokenSecret
});