/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;
var Program = mongoose.model('Program');


module.exports = (function() {
    var CourseSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isAlphanumeric',
                message: 'Solamente números y letras - No espacios'
            })
        },
        program: {
            type: mongoose.Schema.ObjectId,
            ref: 'Program'
        }
    });
    CourseSchema.plugin(denormalize, {
        name: {
            from: 'program'
        }
    });
    CourseSchema.pre('save', function(next) {
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
        next();
    });
    CourseSchema.pre('remove', function(next) {
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

    mongoose.model('Course', CourseSchema);
})();