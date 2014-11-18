/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;
var q = require('q');
var hal = require('hal');

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
    CourseSchema.methods.resource = function(route_gen) {
        var prom = q.defer();
        var res = new hal.Resource(this.toObject(), route_gen.path('get_course', {
            course_id: this._id
        }));
        res.link('program', route_gen.path('get_program', {
            program_id: this.program
        }));
        res.link('courses', route_gen.path('get_courses'));
        res.link('edit', route_gen.path('edit_course', {
            course_id: this._id
        }));
        res.link('delete', route_gen.path('delete_course', {
            course_id: this._id
        }));
        prom.resolve(res.toJSON());
        return prom.promise;

    };

    mongoose.model('Course', CourseSchema);
})();