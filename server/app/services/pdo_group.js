'use strict';
var ee = require('../events/emitter.js').ee;
var logger = require('../log/log.js');
var mongoose = require('mongoose');
var PdoGroup = mongoose.model('PdoGroup');
var PdoGroupComment = mongoose.model('PdoGroupComment');
var PdoGroupService = {};
var Pdo = mongoose.model('Pdo');
var q = require('q');
PdoGroupService.createPdoGroup = function(pdoGroup) {
    var newPdoGroup = new PdoGroup();
    var defer = q.defer();
    newPdoGroup.title = pdoGroup.title;
    newPdoGroup.summary = pdoGroup.summary;
    if (pdoGroup.school) {
        newPdoGroup.school = pdoGroup.school;
    }
    newPdoGroup.pdos = pdoGroup.pdos.map(function(pdo) {
        return mongoose.Types.ObjectId(pdo);
    });
    PdoGroupService.validatePdos(newPdoGroup.pdos).
    then(function() {
        PdoGroupService.saveNewPdoGroup(defer, newPdoGroup);
    }).
    catch (function(reason) {
        defer.reject(reason);        
    });
    return defer.promise;
};
PdoGroupService.saveNewPdoGroup = function(defer, newPdoGroup) {
    newPdoGroup.save(function(err, newPdoGroup) {
        logger.debug('Salvando newPdoGroup');
        if (err) {
            logger.error('Error al salvar pdoGroup', err);
            defer.reject(err);
        } else {
            defer.resolve(newPdoGroup);
            ee.emit('pdo_group:added_to_group', newPdoGroup.pdos);            
        }
    });
};
PdoGroupService.validatePdos = function(pdos) {
    var defer = q.defer();
    var onlyUnique = function(item, i, self) {
        var res = self.indexOf(item) === i;
        return res;
    };
    Pdo.find({
        '_id': {
            $in: pdos
        }
    }, 'school', function(err, foundSchoolIds) {
        if (err) {
            logger.error('ERROR', err);
            defer.reject(err);
        } else if (foundSchoolIds.length === 0) {
            var error = new Error();
            error.message = 'Schools not found';
            error.code = 404;
            defer.reject(error);
        } else {
            var uniqueSchoolIds = foundSchoolIds.map(function(e) {
                return e.school.toString();
            }).
            filter(onlyUnique);
            if (uniqueSchoolIds.length > 1) {
                defer.reject(new Error('More than one school'));
            } else {
                defer.resolve('OK');
            }
        }
    });
    return defer.promise;
};
PdoGroupService.addCommentToPdoGroup = function(pdoGroupId, newPdoGroupComment) {
    var pdoGroupComment = new PdoGroupComment();
    var defer = q.defer();
    pdoGroupComment.title = newPdoGroupComment.title;
    pdoGroupComment.text = newPdoGroupComment.text;
    pdoGroupComment.validate(function(err) {
        if (err) {
            defer.reject(err);
        } else {
            PdoGroupService.savePdoGroupComment(defer, pdoGroupId, pdoGroupComment);
        }
    });
    return defer.promise;
};
PdoGroupService.savePdoGroupComment = function(defer, pdoGroupId, pdoGroupComment) {
    PdoGroup.findByIdAndUpdate(pdoGroupId, {
        $push: {
            comments: pdoGroupComment
        }
    }, function(err, pdo_group) {
        if (err) {
            defer.reject(err);
        } else if (!pdo_group) {
            var error = new Error();
            error.message = 'Pdo group not found';
            error.code = 404;
            defer.reject(error);
        } else {
            ee.emit('pdo_group:added_comment', pdo_group, pdoGroupComment);
            defer.resolve(pdo_group);

        }
    });
};
PdoGroupService.getPdoGroupComment = function(pdoGroupId, pdoGroupCommentId) {
    var defer = q.defer();
    PdoGroup.findById(pdoGroupId, 'comments', function(err, pdo_group) {
        if (err) {
            defer.reject(err);
        } else
        if (!pdo_group) {
            var error = new Error();
            error.message = 'Pdo group not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(pdo_group.comments.id(pdoGroupCommentId));
        }
    });
    return defer.promise;
};
PdoGroupService.deletePdoGroupComment = function(pdoGroupId, pdoGroupCommentId) {
    var defer = q.defer();
    PdoGroup.findById(pdoGroupId, function(err, pdo_group) {
        if (err) {
            defer.reject(err);
        } else if (!pdo_group) {
            var error = new Error();
            error.message = 'Pdo group not found';
            error.code = 404;
            defer.reject(error);
        } else {
            pdo_group.comments.id(pdoGroupCommentId).remove();
            pdo_group.save(function(err, pdo_group) {
                if (err) {
                    defer.reject(err);
                } else if (!pdo_group) {
                    var error = new Error();
                    error.message = 'Pdo group not found';
                    error.code = 404;
                    defer.reject(error);
                } else {
                    defer.resolve(pdo_group);
                }
            });
        }
    });
    return defer.promise;
};
PdoGroupService.addPdosToGroup = function(pdoGroupId, newPdos) {
    var defer = q.defer();
    PdoGroup.findById(pdoGroupId).exec().
    then(function(pdo_group) {
        if (!pdo_group) {
            var error = new Error();
            error.message = 'Pdo group not found';
            error.code = 404;
            defer.reject(error);
        } else {
            logger.debug('Metiendo PDO ...', pdo_group.pdos.length);
            pdo_group.addPdo(newPdos);
            logger.debug('Guardando grupo...', pdo_group.pdos.length);
            pdo_group.save(function(err, saved_pdoGroup_doc) {
                if (err) {
                    logger.error('Error al guardar pdo_group');
                    defer.reject(err);
                } else {
                    logger.debug('PDOs añadidos');
                    ee.emit('pdo_group:added_to_group', pdoGroupId, newPdos);
                    defer.resolve(saved_pdoGroup_doc);
                }
            });
        }
    }).reject(function(reason) {
        logger.error('ERROR', reason);
        defer.reject(reason);
    });
    return defer.promise;
};
PdoGroupService.removePdoFromGroup = function(pdoGroupId, pdoId) {
    var defer = q.defer();
    PdoGroup.findOne({
        _id: pdoGroupId
    }, function(err, pdo_group) {
        if (err) {
        	defer.reject(err);
        } else if (!pdo_group) {
            var error = new Error();
            error.message = 'Pdo group not found';
            error.code = 404;
            defer.reject(error);
        } else {
            //No me deja quitar PDO a los grupos que tengan solo un PDO
            if (pdo_group.pdos.length > 1) {
            	logger.debug('Eliminando',pdoId);
                return PdoGroup.findByIdAndUpdate(pdoGroupId, {
                    $pull: {
                        pdos: pdoId
                    }
                }, function(err, pdoGroup) {
                    if (err) {
                        defer.reject(err);
                    } else {
                        ee.emit('pdo:removed_from_group', pdoId);
                        defer.resolve(pdoGroup);                        
                    }
                });
            } else {
                var errLastPdo = new Error();
                errLastPdo.message = 'Last PDO in group';
                errLastPdo.code = 403;
                defer.reject(errLastPdo);
            }
        }
    });
    return defer.promise;
};
module.exports = PdoGroupService;