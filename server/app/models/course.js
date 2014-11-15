/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;

module.exports = function() {
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
    mongoose.model('Course', CourseSchema);
};