'use strict';
var mongoose = require('mongoose');
var School = mongoose.model('School');
var Pdo = mongoose.model('Pdo');
var Course = mongoose.model('Course');
var Program = mongoose.model('Program');
var PdoGroup = mongoose.model('PdoGroup');
var PdoComment = mongoose.model('PdoComment');
var q = require('q');
var logger = require('../log/log.js');
var PdoService = {};
PdoService.createPDo = function(pdo) {
    var deferred_school = q.defer();
    var deferred_course = q.defer();
    var deferred_program = q.defer();
    var promise_array = [];
    var newPdo = new Pdo();
    var defer = q.defer();
    newPdo.name = pdo.name;
    newPdo.surname = pdo.surname;
    newPdo.email = pdo.email;
    newPdo.phone = pdo.phone;
    newPdo.num_id = pdo.num_id;
    newPdo.title = pdo.title;
    newPdo.text = pdo.text;
    newPdo.posted_at = pdo.postedAt;
    newPdo.deviceUUID = pdo.deviceUUID;
    promise_array.push(deferred_school.promise);
    School.findOne({
        schoolname: pdo.school.schoolname
    }, function(err, school) {
        if (err) {
            deferred_school.reject(err);
        }
        if (!school) {
            logger.error('No school found!SchoolName:%s', pdo.school.schoolname);
            deferred_school.reject('No school found with[' + pdo.school.schoolname + ']');
        }
        deferred_school.resolve(school);
    });
    promise_array.push(deferred_program.promise);
    Program.findOne({
        code: pdo.program.code
    }, function(err, program) {
        if (err) {
            deferred_program.reject(err);
        }
        if (!program) {
            deferred_program.reject('No program found');
        }
        deferred_program.resolve(program);
    });
    promise_array.push(deferred_course.promise);
    Course.findOne({
        code: pdo.course.code
    }, function(err, course) {
        if (err) {
            deferred_course.reject(err);
        }
        if (!course) {
            deferred_course.reject('No course found');
        }
        deferred_course.resolve(course);
    });
    q.all(promise_array).spread(function(school, program, course) {
        newPdo.course = course;
        newPdo.program = program;
        newPdo.school = school;
        newPdo.save(function(err) {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(newPdo);
            }
            //Enviar e-mail a la persona responsable del centro
            //Enviar notificación al movil por el sistema de google/apple
        });
    }).fail(function(reason) {
        logger.error('Promesa rechazada. Razon: %s', reason);
        q.reject(reason);
    });
    return defer.promise;
};
PdoService.addCommentToPDO = function addCommentToPDO(pdoId, pdoComment) {
    var new_pdo_comment = new PdoComment();
    var defer = q.defer();
    var error_not_valid;
    new_pdo_comment.title = pdoComment.title;
    new_pdo_comment.text = pdoComment.text;
    new_pdo_comment.validate(function(err) {
        if (typeof err === 'undefined') {
            Pdo.findByIdAndUpdate(pdoId, {
                $push: {
                    comments: pdoComment
                }
            }, function(err, pdo) {
                if (err) {
                    defer.reject(err);
                } else if (!pdo) {
                    var error = new Error();
                    error.message = 'Pdo not found';
                    error.code = 404;
                    defer.reject(error);
                } else {
                    logger.debug('**COMMENTS**', pdo.comments.length);
                    defer.resolve(pdo);
                }
            });
        } else {
            defer.reject(err);
        }
    });
    return defer.promise;
};
PdoService.deletePDOComment = function deletePDOComment(pdoId, commentId) {
    var defer = q.defer();
    Pdo.findById(pdoId, function(err, pdo) {
        if (err) {
            defer.reject(err);
        } else if (!pdo) {
            var error = new Error();
            error.message = 'Pdo not found';
            error.code = 404;
            defer.reject(error);
        } else {
            pdo.comments.id(commentId).remove();
            try {
                pdo.save(function(err, pdo) {
                    if (err) {
                        defer.reject(err);
                        return;
                    } else if (!pdo) {
                        var error = new Error();
                        error.message = 'Pdo not found';
                        error.code = 404;
                        defer.reject(error);
                    } else {
                        defer.resolve(pdo);
                    }
                });
            } catch (E) {
                logger.error('Error! %s', E);
                defer.reject(E);
            }
        }
    });
    return defer.promise;
};
PdoService.getPdo = function(pdoId) {
    var defer = q.defer();
    Pdo.findById(pdoId, function(err, pdo) {
        if (err) {
            defer.reject(err);
        } else if (!pdo) {
            var error = new Error();
            error.message = 'Pdo not found';
            error.code = 404;
            defer.reject(error);
        } else {
            defer.resolve(pdo);
        }
    });
    return defer.promise;
};
PdoService.getPdoComments = function(pdoId) {
    var defer = q.defer();
    var promise_array = [];
    var promPdoComments = q.defer();
    var promPdoGroupComments = q.defer();
    promise_array[0] = promPdoComments.promise;
    promise_array[1] = promPdoGroupComments.promise;
    q.all(promise_array).
    spread(function(pdo_comments, pdo_group_comments) {
        var respuesta = [];

        function compare(a, b) {
            if (a.date_created > b.date_created) {
                return -1;
            }
            if (a.date_created < b.date_created) {
                return 1;
            }
            return 0;
        }
        respuesta = respuesta.concat(pdo_comments);
        respuesta = respuesta.concat(pdo_group_comments);
        respuesta = respuesta.sort(compare);
        defer.resolve(respuesta);
    }).fail(function(reason) {
        logger.error('Promesa rechazada. Razon: %s', reason);
        defer.reject(reason);
    });
    Pdo.findById(pdoId, function(err, pdo) {
        if (err) {
            promPdoComments.reject(err);
        } else if (!pdo) {
            var error = new Error();
            error.message = 'Pdo not found';
            error.code = 404;
            promPdoComments.reject(error);
        } else if (pdo.comments.length === 0) {
            promPdoComments.resolve([]);
        } else {
            promPdoComments.resolve(pdo.comments);
        }
        if (pdo.pdo_group) {
            PdoGroup.findById(pdo.pdo_group, function(err, pdo_group) {
                if (err) {
                    promPdoGroupComments.reject(err);
                    return;
                }
                if (!pdo_group) {
                    promPdoGroupComments.resolve([]);
                    return;
                }
                promPdoGroupComments.resolve(pdo_group.comments);
            });
        } else {
            promPdoGroupComments.resolve([]);
        }
    });
    return defer.promise;
};
PdoService.rejectPDo = function(pdoId) {
    var defer = q.defer();
    Pdo.findByIdAndUpdate(pdoId, {
        status: 'STATUS_REJECTED'
    }, function(err, pdo) {
        if (err) {
            defer.reject(err);
        } else if (!pdo) {
            var error = new Error();
            error.message = 'Pdo not found';
            error.code = 404;
            defer.reject(error);
        } else {
            logger.debug('Pdo rechazado: (%s)', pdo.status);
            defer.resolve(pdo);
        }
    });
    return defer.promise;
};
PdoService.filterPdoBySchool = function(limit, pdoFilter) {
    var defer = q.defer();
    Pdo.find(pdoFilter).
    limit(limit).
    exec().
    then(function(pdos) {
        logger.debug('Encontrados (%d) Pdos', pdos.length);
        if(!pdos){
            defer.resolve([]);
        }else{
            defer.resolve(pdos);
        }
    }, function(err) {
        defer.reject(err);
    });
    return defer.promise;
};
module.exports = PdoService;