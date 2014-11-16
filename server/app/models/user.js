/**


* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');

var Schema = mongoose.Schema;

module.exports = (function() {
    var UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: validate({
                validator: 'isEmail',
                message: 'Tiene que se un e-mail valido'
            })
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: 'STATUS_ACTIVO',
            validator: validate({
                validator: 'isIn',
                arguments: ['STATUS_ACTIVO', 'STATUS_INACTIVO']
            })
        },
        role: {
            type: String,
            required: true,
            default: 'ROLE_BASICO',
            validator: validate({
                validator: 'isIn',
                arguments: ['ROLE_ADMIN', 'ROLE_GESTOR', 'ROLE_BASICO']
            })
        },
        school_name: {
            type: [String],
        }
    });
    mongoose.model('User', UserSchema);

}());