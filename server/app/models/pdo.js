/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var denormalize = require('mongoose-denormalize');
var hal = require('hal');
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
        },
        created_on: {
            type: Date,
            default: Date.now
        },
        group_id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Group'
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

    PdoSchema.methods.resource = function(route_gen) {
        var res = new hal.Resource(this.toObject(), route_gen.path('get_pdo', {
            pdo_id: this._id
        }));

        res.link('group', route_gen.path('get_group', {
            group_id: this.group_id
        }));

        res.link('comment', route_gen.path('comment_pdo', {
            pdo_id: this._id
        }));

        res.link('comment_group',route_gen.path('comment_group_pdo',{
            group_id: this.group_id
        }));

        res.link('delete', route_gen.path('delete_pdo', {
            course_id: this._id
        }));


        return res.toJSON();

    };
    mongoose.model('Pdo', PdoSchema);
})();