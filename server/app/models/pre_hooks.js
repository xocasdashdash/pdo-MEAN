'use strict';
var mongoose = require('mongoose');
var q = require('q');

module.exports = (function() {
    var Program = mongoose.model('Program');
    var Course = mongoose.model('Course');
    var PdoGroup = mongoose.model('PdoGroup');
    var Pdo = mongoose.model('Pdo');

    //Program Hooks
    Program.schema.pre('remove', function(next) {
        var prog = this;
        Course.find({
            program: prog._id
        }).remove();
        next();
    });
    //Course hooks
    Course.schema.pre('save', function(next) {
        var course = this;
        if (course.isNew) {
            Program.update({
                _id: course.program
            }, {
                $inc: {
                    number_of_courses: 1
                }
            }).exec();
        }
        course.updated_on = Date.now;
        next();
    });
    Course.schema.pre('remove', function(next) {
        var course = this;
        Program.update({
            _id: course.program
        }, {
            $inc: {
                number_of_courses: -1
            }
        }).exec();
        next();
    });

    //Incluir hook post save en el grupo para que
    // añada/elimine las referencias en los PDO
    PdoGroup.schema.pre('save', function(next) {
        var pdo_group = this,
            prom_array = [];
        prom_array = pdo_group.pdos.map(function(pdo_id) {
            var deferred = q.defer();
            Pdo.update({
                _id: pdo_id,
                group_id: null
            }, {
                $set: {
                    group_id: pdo_group._id
                }
            }, function(err, pdo) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve(pdo);
            });
            return deferred.promise;
        });

        q.all(prom_array).then(function(value) {
            next();
        }, function(reason) {
            next(reason);
        });

    });


})();