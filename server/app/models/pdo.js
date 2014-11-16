/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;

module.exports =
    (function() {
    var PdoSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        num_id: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isAlphanumeric',
                message: 'Solamente números y letras'
            })
        },
        email: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isEmail',
                message: 'No es un e-mail válido'
            })
        },
        phone: {
            type: String,
            required: false,
            validate: validate({
                validator: 'isNumeric',
                message: 'Solamente números'
            })
        },
        school: {
            type: mongoose.Schema.ObjectId,
            ref: 'School',
            required: true
        },
        program: {
            type: mongoose.Schema.ObjectId,
            ref: 'Program',
            required: true
        },
        course: {
            type: mongoose.Schema.ObjectId,
            ref: 'Course',
            required: true
        }
    });
    PdoSchema.plugin(denormalize, {
        schoolname: {
            from: 'school'
        },
        gradename: {
            from: 'program'
        },
        coursename: {
            from: 'course'
        },
    });
    mongoose.model('Pdo', PdoSchema);
})();