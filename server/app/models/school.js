/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;

module.exports = function() {
    var SchoolSchema = new Schema({
        schoolname: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isURL',
                message: 'No es una URL válida'
            })
        },
        email: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isEmail',
                message: 'No es un e-mail valido'
            })
        },
        school_codes:[]
    });
    SchoolSchema.plugin(denormalize, {
        schoolname: {
            to: 'Pdo',
            ref: 'school'
        }
    });
    mongoose.model('School', SchoolSchema);

};