'use strict';
var winston = require('winston');
var config = require('../../config/config.js');
var logger = function(config) {
    var new_log = new(winston.Logger)({
        transports: [
            new(winston.transports.Console)({
                level: config.logger.level
            }),
            new(winston.transports.File)({
                filename: config.logger.api,
                level: config.logger.level
            })
        ]
    });
    return new_log;
};

module.exports = logger(config);