'use strict';
module.exports = (function(enviroment) {
    var config = {
        dev: {
            "db": {
                //"mongodb": "mongodb://testUser:testpassword@ds045077.mongolab.com:45077/shopwithmetest"
                // Localhost
                "mongodb": "mongodb://gestor:gestor1234@localhost/mean-pdo"
            },
            "logger": {
                "api": __dirname + "../../../logs/api.dev.log",
                "exception": __dirname + "../../../logs/exceptions.dev.log",
                "level": "debug"
            },
            "url": "http://localhost:8081"
        },
        prod: {
            "db": {
                //"mongodb": "mongodb://testUser:testpassword@ds045077.mongolab.com:45077/shopwithmetest"
                // Localhost
                "mongodb": "mongodb://localhost/ShopWithMe"
            },
            "logger": {
                "api": __dirname + "../../../logs/api.log",
                "exception":  __dirname + "../../../logs/exceptions.log",
                "level": "warn"
            }
        }
    };
    return (function(env) {
        if (config.hasOwnProperty(env)) {
            return config[env];
        } else {
            return config.dev;
        }
    })(enviroment);

})(process.env.ENVIROMENT);