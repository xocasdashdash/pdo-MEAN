'use strict';
module.exports = (function(enviroment) {
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
            "host": "http://localhost",
            "port": "8081"
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
            "port": "3000"
        }
    };
    for (var propName in config) {
        config[propName].url = config[propName].host + ":" + config[propName].port;
    }
    if (enviroment === "prod") {
        console.log('Cargando entorno de producción[OPENSHIFT]');
        config[enviroment].db.mongodb = "mongodb://pdo-db:" + proccess.env.MONGO_PASWORD + "@ds039211.mongolab.com:39211/pdo";
        config[enviroment].port = process.env.OPENSHIFT_NODEJS_PORT;
        config[enviroment].host = process.env.OPENSHIFT_NODEJS_IP;
        config[enviroment].logger.api = "/var/lib/openshift/54cba74be0b8cd26ba0001a0/app-root/logs/api.log";
        config[enviroment].logger.exception = "/var/lib/openshift/54cba74be0b8cd26ba0001a0/app-root/logs/exception.log";
    }
    return (function(env) {
        if (config.hasOwnProperty(env)) {
            return config[env];
        } else {
            return config.dev;
        }
    })(enviroment);

})(process.env.ENVIROMENT);