/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var acl = require('../auth/acl');
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
                message: 'Tiene que ser un e-mail valido'
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
                arguments: ['ROLE_SUPER_ADMIN', 'ROLE_ADMIN', 'ROLE_GESTOR', 'ROLE_BASICO']
            })
        },
        school_name: {
            type: [String],
        },
        created_on: {
            type: Date,
            default: Date.now
        }
    });
    UserSchema.methods.authenticate = function(password) {
        var user = this;
        return bcrypt.compareSync(password, user.password);
    };
    UserSchema.pre('save', function(next) {
        var user = this;
        if (!user.isModified('password')) {
            next();
        }
        bcrypt.genSalt(12, function(err, salt) {
            if (err) {
                next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    next(err);
                }
                user.password = hash;
                next();
            });
        });
    });
    mongoose.model('User', UserSchema);
}());