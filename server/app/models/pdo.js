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
    var CommentsSchema = new Schema({
        author: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        title: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isLength',
                arguments: 10,
                message: 'Title length should be more than 10 chars'
            })
        },
        text: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isLength',
                arguments: [50,3500],
                message: 'Text length should be between 50 and 3500 chars'
            })
        },
        date_created: {
            type: Date,
            default: Date.now()
        }
    });
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
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
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
            ref: 'PdoGroup'
        },
        posted_at: {
            type: Date
        },
        comments: {
            type: [CommentsSchema]
        },
        deviceUUID: {
            type: String
        },

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
        if (this.group_id) {
            res.link('group', route_gen.path('get_group', {
                group_id: this.group_id
            }));
        }

        res.link('comment', route_gen.path('add_comment_pdo', {
            pdo_id: this._id
        }));

        /*res.link('comment_group', route_gen.path('comment_group_pdo', {
            group_id: this.group_id
        }));*

        res.link('delete', route_gen.path('delete_pdo', {
            course_id: this._id
        }));*/

        return res.toJSON();

    };

    mongoose.model('Pdo', PdoSchema);
    mongoose.model('PdoComment', CommentsSchema);
})();