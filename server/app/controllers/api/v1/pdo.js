'use strict';
var mongoose = require('mongoose');
var logger = require('../../../log/log.js');
var acl = require('../../../auth/acl');
var PdoService = require('../../../services/pdo.js');
module.exports = function(router) {
    //Crear un pisado
    router({
        name: 'create_pdo',
        path: '/'
    }).post(function(req, res) {
        PdoService.createPDo(req.body).
        then(function(newPdo) {
            res.send(newPdo.resource(req.route_gen));
        }).
        catch (function(reason) {
            logger.error('Reason',reason);
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
    router({
        name: 'add_comment_pdo',
        path: '/:pdo_id/comment'
    }).put(acl({
        level: 'basic',
        type: 'pdo',
        id_param: 'pdo_id'
    }), function(req, res) {
        PdoService.addCommentToPDo(req.params.pdo_id, req.body).
        then(function(newPdo) {
            res.send(newPdo.resource(req.route_gen));
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
        name: 'delete_comment_pdo',
        path: '/:pdo_id/comment/:comment_id',
        middleware: acl({
            level: 'secured',
            type: 'pdo',
            id_param: 'pdo_id'
        })
    }).delete(function(req, res) {
        PdoService.deletePDOComment(req.params.pdo_id, req.params.comment_id).
        then(function(newPdo) {
            res.send(newPdo.resource(req.route_gen));
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
        name: 'get_pdo_comments',
        path: '/:pdo_id/comment'
    }).get(function(req, res) {
        PdoService.getPdoComments(req.params.pdo_id).
        then(function(comments) {
            res.send(comments);
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
        name: 'reject_pdo',
        path: '/:pdo_id/reject',
        middleware: acl({
            level: 'basic',
            type: 'pdo',
            id_param: 'pdo_id'
        })
    }).put(function(req, res) {
        PdoService.rejectPDo(req.params.pdo_id).
        then(function(pdo) {
            res.send(pdo.resource(req.route_gen));
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
        name: 'get_pdo_by_school',
        path: '/school/:school_id?',
        middleware: acl({
            level: 'basic',
            type: 'school',
            param: 'school_id'
        })
    }).get(function(req, res) {
        var from = req.query.createdOnBefore;
        var limit = req.query.limit;
        var pdo_filter = {};
        pdo_filter.school = mongoose.Types.ObjectId(req.params.school_id);
        pdo_filter.created_on = {
            $lte: from
        };
        if (req.query.status_filter) {
            pdo_filter.status = req.query.status_filter;
        }
        PdoService.filterPdoBySchool(limit, pdo_filter).
        then(function(pdos) {
            res.send(pdos.map(function(pdo) {
                return pdo.resource(req.route_gen);
            }));
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
        name: 'get_my_pdos',
        path: '/myschool'
    }).get(acl({
        level: 'basic'
    }), function(req, res) {
        //Si es nivel basic y no trae un parametro school_id lo inyecto
        //en el middleware
        var from = req.query.createdOnBefore,
            limit = req.query.limit,
            pdo_filter = {};
        pdo_filter.created_on = {
            $lte: from
        };
        //Filtro por los PDo a los que tiene acceso el usuario
        //Si es super-admin puede ver todos
        //Si es local-admin puede ver los de un centro
        //Else: No debería llegar aquí
        //pdo_filter.school = mongoose.Types.ObjectId(req.params.school_id);
        if (req.query.status_filter) {
            pdo_filter.status = req.query.status_filter;
        }
        res.send('s');
        return;
        /*Pdo.find(pdo_filter).limit(limit).then(function(pdos) {
            logger.debug('Encontrados (%d) Pdos', pdos.length);
            var pdoResp;
            if (!pdos) {
                pdoResp = [];
            } else {
                pdoResp = pdos.map(function(e) {
                    return e.resource(req.route_gen);
                });
            }
            res.send(pdoResp);
            return;
        }, function(err) {
            res.status(400).send(err);
            return;
        });*/
    });
    router({
        name: 'get_pdo',
        path: '/:pdo_id',
        middleware: acl({
            level: 'secured',
            type: 'pdo',
            id_param: 'pdo_id'
        })
    }).get(function(req, res) {
        PdoService.getPdo(req.params.pdo_id).
        then(function(pdo) {
            res.send(pdo.resource(req.route_gen));
        }).
        catch (function(reason) {
            if (reason.code) {
                res.status(reason.code).send(reason);
            } else {
                res.status(400).send(reason);
            }
        });
    });
};