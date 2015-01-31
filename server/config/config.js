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
        config[enviroment].db.mongodb = "mongodb://pdo-db:" + proccess.env.MONGO_PASWORD + "@ds039211.mongolab.com:39211/pdo";
    }
    return (function(env) {
        if (config.hasOwnProperty(env)) {
            return config[env];
        } else {
            return config.dev;
        }
    })(enviroment);

})(process.env.ENVIROMENT);