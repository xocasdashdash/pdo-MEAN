'use strict';
var events = require('events');
var mongoose = require('mongoose');
//var PdoGroup = mongoose.model('PdoGroup');
var Pdo = mongoose.model('Pdo');
var logger = require('../log/log.js');
var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');
var config = require('../../config/config.js');
//------------------------//
module.exports.initialize = function(ee) {
    var transporter = nodemailer.createTransport(smtpPool({
        service: 'gmail',
        auth: {
            user: 'pdo.uah@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        },
        maxConnections: 5,
        maxMessages: 10
    }));
    ee.on('pdo_group:added_to_group', function(pdos_ids) {
        logger.debug('pdo_group:added_to_group');
        if (config.env === 'dev') {
            logger.debug('Entorno de desarrollo. No enviamos correos');
            return;
        }
        var mail_callback = function(error, info) {
            if (error) {
                logger.error('Error al enviar e-mail: %s', error);
            } else {
                logger.debug('Correo [pdo_group:added_to_group] enviado. Info: [%s]', info);
            }
        };
        if (!Array.isArray(pdos_ids)) {
            pdos_ids = [].concat(pdos_ids);
        }
        Pdo.find({
            '_id': {
                $in: pdos_ids
            }
        }, function(err, pdos) {
            if (err) {
                logger.error('ERROR: ', err);
                return;
            }
            if (!pdos) {
                logger.error('Pdos NO encontrados');
                logger.error('IDs: ', pdos_ids);
            } else {
                pdos.map(function(pdo) {
                    transporter.sendMail({
                        from: 'Administración de PDO <pdo.uah@gmail.com>',
                        sender: 'Administración de PDO <pdo.uah@gmail.com>',
                        to: pdo.email,
                        subject: 'Hemos agrupado tu PDO con otros!',
                        html: 'Hola! Hemos agrupado tu PDO junto a otros similares. ' + ' Si tienes cualquier duda pasate por la delegación y te lo comentamos ' + '<br> Un saludo!'
                    }, mail_callback);
                });
            }
        });
    });
    ee.on('pdo_group:removed_from_group', function(pdo_id) {
        logger.debug('Eliminando pdo (%s)', pdo_id);
        Pdo.findByIdAndUpdate(pdo_id, {
            $set: {
                group_id: null
            }
        }, function(err, pdo) {
            if (err) {
                logger.error('Error al modificar el PDO(%s):%s. Pdo: %s', pdo_id, err, pdo);
            }
        });
        return;
    });
    ee.on('pdo_group:added_comment', function(pdo_group, comment) {
        //Notifico al usuario que se ha añadido un comentario
        logger.debug('pdo_group:added_comment');
        Pdo.find({
            group_id: pdo_group._id
        }, 'email').exec().then(function(pdos) {
            if (config.env === 'dev') {
                logger.debug('Entorno de desarrollo. No enviamos correos');
                return;
            }
            var mail_callback = function(error, info) {
                if (error) {
                    logger.error('Error al enviar e-mail: %s', error);
                } else {
                    logger.debug('Correo enviado. Info: %s', info);
                }
            };
            var mail_array = pdos.map(function(pdo) {
                transporter.sendMail({
                    from: 'Administración de PDO <pdo.uah@gmail.com>',
                    sender: 'Administración de PDO <pdo.uah@gmail.com>',
                    to: pdo.email,
                    subject: 'Nuevo comentario en tu pdo!',
                    html: 'Titulo: ' + comment.title + '<br> Texto: ' + comment.text + '<br> Un saludo!'
                }, mail_callback);
                return pdo.email;
            });
            logger.debug('Emails: %s', mail_array.join(','));
        }, function(err) {
            logger.error('Error en evento \'pdo_group:added_comment\'. Grupo: %s. Error: %s', pdo_group, err);
        });
        logger.debug('Saliendo del evento...');
    });
    ee.on('pdo_group:status_changed', function(pdo_group) {
        //Notifico al usuario que se ha modificado el estadoç
        //BUSCO EMAIL DE TODO LOS USUARIO DEL GRUPO
        logger.debug('pdo_group:status_changed');
        Pdo.find({
            group_id: pdo_group._id
        }, 'email').exec().then(function(pdos) {
            if (config.env === 'dev') {
                logger.debug('Entorno de desarrollo. No enviamos correos');
                return;
            }
            var mail_callback = function(error, info) {
                if (error) {
                    logger.error('Error al enviar e-mail:', error);
                } else {
                    logger.debug('Correo enviado. Info: ', info);
                }
            };
            var mail_array = pdos.map(function(pdo) {
                transporter.sendMail({
                    from: 'Administración de PDO <pdo.uah@gmail.com>',
                    sender: 'Administración de PDO <pdo.uah@gmail.com>',
                    to: pdo.email,
                    subject: 'Ha habido un cambio en el estado de este PDO',
                    html: 'Estado: ' + pdo_group.getStatusMessage()
                }, mail_callback);
                return pdo.email;
            });
            logger.debug('Emails: %s', mail_array.join(','));
        }, function(err) {
            logger.error('Error en evento \'pdo_group:added_comment\'. Grupo: %s. Error: %s', pdo_group, err);
        });
        logger.debug('Saliendo del evento...');
    });
};