/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
'use strict';
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
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
                arguments: [50, 3500],
                message: 'Text length should be between 50 and 3500 chars'
            })
        },
        date_created: {
            type: Date,
            default: Date.now()
        }
    });

    CommentsSchema.methods.resource = function(route_gen) {

        var res = new hal.Resource(this.toObject(),
            route_gen.path('get_pdo_group_comment', {
                pdo_group_id: this.parent()._id,
                comment_id: this._id
            }));

        res.link('delete', route_gen.path('delete_pdo_group_comment', {
            pdo_group_id: this.parent()._id,
            comment_id: this._id
        }));

        return res;
    };
    var validStatuses = ['STATUS_RESOLVED',
        'STATUS_NOT_RESOLVED',
        'STATUS_ATTENDED',
        'STATUS_UPCHAINED',
        'STATUS_PENDING'
    ];
    var PdoGroupSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        pdos: {
            type: [mongoose.Schema.ObjectId]
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: false
        },
        old_status: {
            type: String,
            required: true,
            default: 'STATUS_PENDING',
            validator: validate({
                validator: 'isIn',
                arguments: validStatuses
            })
        },
        status: {
            type: String,
            required: true,
            default: 'STATUS_PENDING',
            validator: validate({
                validator: 'isIn',
                arguments: validStatuses
            })
        },
        comments: {
            type: [CommentsSchema]
        }
    });

    PdoGroupSchema.methods.addPdo = function(pdo_id) {
        if (this.pdos.indexOf(pdo_id) !== -1) {
            return;
        } else {
            this.pdos.push(pdo_id);
        }
    };

    PdoGroupSchema.methods.getStatusMessage = function() {
        var messages = {};
        messages.STATUS_PENDING = 'PDO pendiente de tramitar';
        messages.STATUS_NOT_RESOLVED = 'PDO no resuelto';
        messages.STATUS_ATTENDED = 'Estamos atendiendo este PDO';
        messages.STATUS_UPCHAINED = 'Estamos esperando respuesta de la Universidad';
        messages.STATUS_RESOLVED = 'PDO resuelto';
        return messages[this.status];
    };

    PdoGroupSchema.methods.resource = function(route_gen) {
        var res = new hal.Resource(this.toObject(),
            route_gen.path('get_pdo_group', {
                pdo_group_id: this._id
            }));

        res.link('comment', route_gen.path('add_pdo_group_comment', {
            pdo_group_id: this._id
        }));

        res.embed('comments', this.comments.map(function(comment) {
            return comment.resource(route_gen);
        }));

        res.link('delete', route_gen.path('delete_group', {
            pdo_group_id: this._id
        }));
        return res.toJSON();
    };

    //I use this to be able to access this values on a save hook
    PdoGroupSchema.pre('save', function(next) {
        var pdo_group = this,
            error;
        if (pdo_group.isModified('status')) {
            switch (pdo_group.old_status) {
                case 'STATUS_PENDING':
                    if (pdo_group.status === 'STATUS_ATTENDED') {
                        next();
                    } else {
                        error = new Error('INCOMPLETE TRANSITION. INVALID NEW STATUS');
                        next(error);
                    }
                    break;
                case 'STATUS_ATTENDED':
                    if (pdo_group.status === 'STATUS_UPCHAINED' ||
                        pdo_group.status === 'STATUS_RESOLVED') {
                        next();
                    } else {
                        error = new Error('INCOMPLETE TRANSITION. INVALID NEW STATUS');
                        next(error);
                    }
                    break;
                case 'STATUS_UPCHAINED':
                    if (pdo_group.status === 'STATUS_NOT_RESOLVED' ||
                        pdo_group.status === 'STATUS_RESOLVED') {
                        next();
                    } else {
                        error = new Error('INCOMPLETE TRANSITION. INVALID NEW STATUS');
                        next(error);
                    }
                    break;
                    //case 'STATUS_RESOLVED':
                    //case 'STATUS_NOT_RESOLVED':
                default:
                    error = new Error('STATUS DOES NOT ADMIT TRANSITIONS');
                    next(error);
            }
        }
        next();
    });
    mongoose.model('PdoGroupComment', CommentsSchema);
    mongoose.model('PdoGroup', PdoGroupSchema);

})();