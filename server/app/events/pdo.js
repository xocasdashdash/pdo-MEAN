'use strict';
var Pdo = require('mongoose').model('Pdo');
var logger = require('../log/log.js');
module.exports.initialize = function(ee) {
    ee.on('pdo:removed_from_group', function(pdo_id) {
        logger.debug('Eliminando pdo group (%s)', pdo_id);
        Pdo.findByIdAndUpdate(pdo_id, {
            $set: {
                group_id: null
            }
        }, function(err) {
            if (err) {
                logger.error('Error al modificar el PDO(%s):%s', pdo_id, err);
            }
        });
    });
    ee.on('pdo:added_to_group', function (pdo_id,pdo_group_id) {
        logger.debug('Pdo (%s) aniadido al grupo', pdo_id);
        Pdo.findByIdAndUpdate(pdo_id, {
            $set: {
                group_id: pdo_group_id
            }
        }, function(err) {
            if (err) {
                logger.error('Error al añadir el PDO(%s) al grupo (%s). Error: %s', pdo_id, pdo_group_id, err);
            }
        });
    });
    /*ee.on('pdo:added_comment',function (pdo_id) {
        //Notifico al usuario que se ha añadido un comentario
    });*/
};