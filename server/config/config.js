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
                "api": "logs/api.log",
                "exception": "logs/exceptions.log"
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
                "api": "logs/api.log",
                "exception": "logs/exceptions.log"
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