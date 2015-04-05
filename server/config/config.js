'use strict';
var os = require('os');
module.exports = (function(environment) {
    var config = {
        dev: {
            "db": {
                // Localhost
                "mongodb": "mongodb://gestor:gestor1234@localhost/mean-pdo"
            },
            "logger": {
                "api": __dirname + "../../../logs/api.dev.log",
                "exception": __dirname + "../../../logs/exceptions.dev.log",
                "level": "debug"
            },
            "host": "xokas-desktop.local",
            "port": "8081", 
            "tokenSecret": "jajajaja",
            "env" : "dev"
        },
        prod: {
            "db": {
                // MongoLab
                "mongodb": "mongodb://%%USER%%:%%PASSWORD%%@ds039211.mongolab.com:39211/pdo"

            },
            "logger": {
                "api": __dirname + "../../../logs/api.log",
                "exception": __dirname + "../../../logs/exceptions.log",
                "level": "warn"
            },
            "host": "http://pdo-xocasdasdash.rhcloud.com",
            "port": "3000",
            "tokenSecret": "process.env.XPRESS_SECRET",
            "env" : "prod"
        }
    };
    for (var propName in config) {
        config[propName].url = config[propName].host + ":" + config[propName].port;
    }
    if (environment === "prod") {
        console.log('Cargando entorno de producción[OPENSHIFT]');
        config[environment].db.mongodb = "mongodb://pdo-db:" + process.env.MONGO_PASSWORD + "@ds039211.mongolab.com:39211/pdo";
        config[environment].port = process.env.OPENSHIFT_NODEJS_PORT;
        config[environment].host = process.env.OPENSHIFT_NODEJS_IP;
        config[environment].tokenSecret = process.env.XPRESS_SECRET;
        config[environment].logger.api = "/var/lib/openshift/54cba74be0b8cd26ba0001a0/app-root/logs/api.log";
        config[environment].logger.exception = "/var/lib/openshift/54cba74be0b8cd26ba0001a0/app-root/logs/exception.log";
    } else {
        console.log('Cargando entorno de desarollo:', environment);
        config.dev.host = os.hostname() + '.local';
    }
    return (function(env) {
        if (config.hasOwnProperty(env)) {
            console.log('Env:', env);
            return config[env];
        } else {
            return config.dev;
        }
    })(environment);

})(process.env.ENVIRONMENT);