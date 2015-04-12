'use strict';
var mongoose = require('mongoose');
var logger = require('../../../log/log.js');
var PdoGroup = mongoose.model('PdoGroup');
var acl = require('../../../auth/acl');
var PdoGroupService = require('../../../services/pdo_group');
module.exports = function(router) {
    router({
        name: 'create_pdo_group',
        path: '/'
    }).post(acl({
        level: 'basic',
        type: 'pdo_group'
    }), function(req, res) {
        PdoGroupService.createPdoGroup(req.body).
        then(function(newPdoGroup) {
            logger.info('new PdoGroup creado correctamente');
            res.send(newPdoGroup.resource(req.route_gen));
        }).
        catch (function(reason) {
            logger.error(reason);
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'add_pdo_group_comment',
        path: '/:pdo_group_id/comment'
    }).put(acl({
        level: 'basic',
        type: 'pdo_group',
        id_param: 'pdo_group_id'
    }), function(req, res) {
        PdoGroupService.addCommentToPdoGroup(req.params.pdo_group_id, req.body).
        then(function(newPdoGroup) {
            res.send(newPdoGroup.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'get_pdo_group_comment',
        path: '/:pdo_group_id/comment/:comment_id'
    }).get(function(req, res) {
        PdoGroup.getPdoGroupComment(req.params.pdo_group_id, req.params.comment_id).
        then(function(pdoGroupComment) {
            res.send(pdoGroupComment.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'delete_pdo_group_comment',
        path: '/:pdo_group_id/comment/:comment_id'
    }).delete(acl({
        level: 'basic',
        type: 'pdo_group',
        id_param: 'pdo_group_id'
    }), function(req, res) {
        PdoGroupService.
        deletePdoGroupComment(req.params.pdo_group_id, req.params.comment_id).
        then(function(pdoGroup) {
            res.send(pdoGroup.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'get_pdo_group',
        path: '/:pdo_group_id'
    }).get(function(req, res) {
        PdoGroup.findById(req.params.pdo_group_id, function(err, pdo_group) {
            if (err) {
                res.send(err);
                return;
            }
            if (!pdo_group) {
                var error = new Error();
                error.message = 'Pdo group not found';
                error.code = 404;
                res.status(404).send(error);
                return;
            }
            res.send(pdo_group.resource(req.route_gen));
            return;
        });
    });
    router({
        name: 'add_pdo_to_group',
        path: '/:pdo_group_id/pdo'
    }).put(acl({
        level: 'basic',
        type: 'pdo_group',
        id_param: 'pdo_group_id'
    }), function(req, res) {
        logger.debug('Recibida peticion para añadir:', 
            req.body.pdos,
             'a :',
              req.params.pdo_group_id);
        PdoGroupService.addPdosToGroup(req.params.pdo_group_id, req.body.pdos).
        then(function(pdoGroup) {
            console.log('Devolviendo doc:');
            res.send(pdoGroup.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'remove_pdo_from_group',
        path: '/:pdo_group_id/pdo/:pdo_id'
    }).delete(acl({
        level: 'basic',
        type: 'pdo_group',
        id_param: 'pdo_group_id'
    }), function(req, res) {
        PdoGroupService.removePdoFromGroup(req.params.pdo_group_id, req.params.pdo_id).then(function(pdoGroup) {
            res.send(pdoGroup.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'delete_group',
        path: '/:pdo_group_id'
    }).delete(acl({
        level: 'basic',
        type: 'pdo_group',
        id_param: 'pdo_group_id'
    }), function(req, res) {
        PdoGroup.findByIdAndRemove(req.params.pdo_group_id, function(err, removedDoc) {
            if (err) {
                res.send(err);
            }
            if (!removedDoc) {
                var error = new Error();
                error.message = 'PdoGroup not found';
                error.code = '404';
                res.status(400).send(error);
            }
            res.status(200).send({
                message: 'Removed',
                type: 'success',
                removedDoc: removedDoc
            });
        });
    });
    router({
        name: 'change_pdo_group_status',
        path: '/:pdo_group_id',
        middleware: acl({
            level: 'basic',
            type: 'pdo_group',
            id_param: 'pdo_group_id'
        })
    }).put(acl({
        level: 'basic',
        type: 'pdo_group',
        id_param: 'pdo_group_id'
    }), function(req, res) {
        PdoGroup.findByIdAndUpdate(req.params.pdo_group_id, {
            status: req.body.status
        }, function(err, updated_doc) {
            if (err) {
                res.status(400).send(err);
            }
            if (!updated_doc) {
                var error = new Error();
                error.message = 'PdoGroup not found';
                error.code = '404';
                res.status(404).send(error);
            }
            res.send(updated_doc.resource(req.route_gen));
        });
    });
    router({
        name: 'get_pdo_group_statuses',
        path: '/config/statuses'
    }).get(function(req, res) {
        var statuses = [];
        statuses.push('STATUS_PENDING');
        statuses.push('STATUS_NOT_RESOLVED');
        statuses.push('STATUS_ATTENDED');
        statuses.push('STATUS_UPCHAINED');
        statuses.push('STATUS_RESOLVED');
        res.send({
            statuses: statuses
        });
    });
};