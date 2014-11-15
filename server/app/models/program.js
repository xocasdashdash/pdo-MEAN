/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;

module.exports = function() {

    var ProgramSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true,
            unique: true,
            validate: validate({
                validator: 'isAlphanumeric',
                message: 'Solamente números y letras - No espacios'
            })
        },
        school: {
            type: mongoose.Schema.ObjectId,
            ref: 'School'
        }
    });
    ProgramSchema.plugin(denormalize, {
        schoolname: {
            from: 'school'
        }
    });
    mongoose.model('Program',ProgramSchema);
};