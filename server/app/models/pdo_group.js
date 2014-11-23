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
            required: true
        },
        text: {
            type: String,
            required: true
        },
        date_created: {
            type: Date,
            default: Date.now()
        }
    });

    CommentsSchema.methods.resource = function(route_gen) {

        var res = new hal.Resource(this.toObject(),
            route_gen.path('get_comment', {
                pdo_group_id: this.parent()._id,
                comment_id: this._id
            }));

        res.link('delete', route_gen.path('delete_comment', {
            pdo_group_id: this.parent()._id,
            comment_id: this._id
        }));

        return res;
    };

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
        status: {
            type: String,
            required: true,
            default: 'STATUS_PENDIENTE',
            validator: validate({
                validator: 'isIn',
                arguments: ['STATUS_RESUELTO',
                    'STATUS_NO_RESUELTO',
                    'STATUS_ELEVADO',
                    'STATUS_PENDIENTE'
                ]
            })
        },
        comments: {
            type: [CommentsSchema]
        }
    });


    PdoGroupSchema.methods.resource = function(route_gen) {
    	
        var res = new hal.Resource(this.toObject(),
            route_gen.path('get_pdo_group', {
                pdo_group_id: this._id
            }));


        res.link('comment', route_gen.path('add_comment', {
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
    mongoose.model('PdoGroup', PdoGroupSchema);

})();