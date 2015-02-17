'use strict';
var jwt = require('jsonwebtoken');
var config = require('./config/config');
var roles = {
    'super_secured': ['ROLE_SUPER_ADMIN'],
    'secured': ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
    'school_level': ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN', 'ROLE_GESTOR']
};
/**
* ROLE_SUPER_ADMIN: Puede dar de alta usuarios, escuelas, titulaciones y cursos
* ROLE_ADMIN: Puede interactuar con todos los PDO y PDOGroup
* ROLE_GESTOR: Gestiona una escuela. Puede actuar con todos los PDO y PDOGroup de esa escuela
*/
module.exports = function(options) {
    var f = function(req, res, next) {
        if (options.secured === true || options.super_secured === true) {
            var token = req.header('Authorization');
            jwt.verify(token, config.tokenSecret, function(err, decoded) {
                //Tiene un token de autorizacion valido
                //Miro el rol que tengo guardado de un usuario
                var role = decoded.role;
                if (roles.indexOf(role) > -1) {
                    //Existe el rol
                    if (options.super_secured === true &&
                        roles.super_secured.indexOf(role) === -1) {
                        var error = new Error();
                        error.message = 'Not authorized';
                        error.code = 401;
                        next(error);
                    } else if (options.secured === true) {
                    	if(roles.secured.indexOf(role)> -1){
                    		//Si el usuario tiene un rol de seguridad
                    		//Le dejo seguir
                    		next();
                    	}
                    	//Tengo que comprobar la escuela
                    	// - Si es relativo a PDO miro que la escuela sea la del usuario. Hay que hacer consulta
                    	// Para el PDO siempre se usa el parametro pdo_id asi que por ahí lo podemos ver
                    	// - Si es relativo a PDOGroup miro que la escuela sea la del usuario. Hay que hacer consulta
                    	// Para el PDOGroup siempre se usa el parametro pdo_group_id asi que por ahí lo podemos ver
                    	
                    } 
                    console.log(decoded.foo); // bar
                }
            });
        } else {
            next();
        }
    };
    return f;
};