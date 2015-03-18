'use strict';
var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');
var roles = {
    'super_secured': ['ROLE_SUPER_ADMIN'],
    'secured': ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'],
    'basic': ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN', 'ROLE_GESTOR']
};
var securityLevels = {
    'super_secured': 'super_secured',
    'secured': 'secured',
    'basic': 'basic',
};
/**
 * ROLE_SUPER_ADMIN: Puede dar de alta usuarios, escuelas, titulaciones y cursos
 * ROLE_ADMIN: Puede interactuar con todos los PDO y PDOGroup
 * ROLE_GESTOR: Gestiona una escuela. Puede actuar con todos los PDO y PDOGroup de esa escuela
 */
/*
* Hay que documentar options. Pasar de un modelo de flags a uno de niveles. Ej:
{
	level: "super_secured", "secured" o "basic"
	Si el nivel es basic tengo que consultar si esa persona 
	tiene acceso a los PDO de esa escuela
	type: "pdo", "pdo_group", "school", "program"
	param: Nombre del parametro que vamos a usar
}
*/
module.exports = function(options) {
    var f = function(req, res, next) {
        var token = req.header('Authorization');
        jwt.verify(token, config.tokenSecret, function(err, decoded) {
            //Tiene un token de autorizacion valido
            if (err) {
                next(err);
                return;
            }
            //Miro el rol que tengo guardado de un usuario
            var role = decoded.role;
            if (roles.indexOf(role) > -1) {
                //Existe el rol
                if (options.level === securityLevels.super_secured) {
                    if (roles[securityLevels.super_secured].indexOf(role) === -1) {
                        var error_super_secured = new Error();
                        error_super_secured.message = 'Not authorized';
                        error_super_secured.code = 401;
                        next(error_super_secured);
                    } else {
                        next();

                    }
                    return;
                } else if (options.level === securityLevels.secured) {
                    if (roles[securityLevels.secured].indexOf(role) === -1) {
                        var error_secured = new Error();
                        error_secured.message = 'Not authorized';
                        error_secured.code = 401;
                        next(error_secured);
                    } else {
                        next();

                    }

                } else if (options.level === securityLevels.basic) {
                    if (roles[securityLevels.basic].indexOf(role) === -1) {
                        var error_basic = new Error();
                        error_basic.message = 'Not authorized';
                        error_basic.code = 401;
                        next(error_basic);
                    } else {
                        next('Error: Configuracion desconocida');
                    }
                }


            } else {
                next('Error: Role not found');
                return;
            }
        });
        return;
    };
    return f;
};