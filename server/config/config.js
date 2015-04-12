'use strict';
var os = require('os');
module.exports = (function(environment) {
    var config = {
        dev: {
            'db': {
                // Localhost
                'mongodb': 'mongodb://gestor:gestor1234@localhost/mean-pdo'
            },
            'logger': {
                'api': __dirname + '/../app/log/api.dev.log',
                'exception': __dirname + '/../app/log/exceptions.dev.log',
                'level': 'debug'
            },
            'host': 'xokas-desktop.local',
            'port': '8081', 
            'tokenSecret': 'jajajaja',
            'env' : 'dev'
        },
        prod: {
            'db': {
                // MongoLab
                'mongodb': 'mongodb://%%USER%%:%%PASSWORD%%@ds039211.mongolab.com:39211/pdo'

            },
            'logger': {
                'api': __dirname + '/../app/log/api.log',
                'exception': __dirname + '/../app/log/exceptions.log',
                'level': 'warn'
            },
            'host': 'http://pdo-xocasdasdash.rhcloud.com',
            'port': '3000',
            'tokenSecret': 'process.env.XPRESS_SECRET',
            'env' : 'prod'
        }
    };
    for (var propName in config) {
        config[propName].url = config[propName].host + ':' + config[propName].port;
    }
    if (environment === 'prod') {
        console.log('Cargando entorno de producción[OPENSHIFT]');
        config[environment].db.mongodb = 'mongodb://pdo-db:' + process.env.MONGO_PASSWORD + '@ds039211.mongolab.com:39211/pdo';
        config[environment].port = process.env.OPENSHIFT_NODEJS_PORT;
        config[environment].host = process.env.OPENSHIFT_NODEJS_IP;
        config[environment].tokenSecret = process.env.XPRESS_SECRET;
        config[environment].logger.api = '/var/lib/openshift/54cba74be0b8cd26ba0001a0/app-root/log/api.log';
        config[environment].logger.exception = '/var/lib/openshift/54cba74be0b8cd26ba0001a0/app-root/log/exception.log';
    } else {
        config.dev.host = os.hostname() + '.local';
    }
    return (function(env) {
        if (config.hasOwnProperty(env)) {
            return config[env];
        } else {
            return config.dev;
        }
    })(environment);

})(process.env.ENVIRONMENT);