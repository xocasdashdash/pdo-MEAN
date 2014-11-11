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
            requred: true,
            validate: validate({
                validator: 'isAlphanumeric',
                message: 'Solamente números y letras - No espacios'
            })
        },
        grade: {
            type: mongoose.Schema.ObjectId,
            ref: ''
        }

    });
    mongoose.model('Course', CourseSchema);
};