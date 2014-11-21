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

module.exports = (function() {
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
        school_codes: [],
        created_on: {
            type: Date,
            default: Date.now
        }
    });
    SchoolSchema.plugin(denormalize, {
        schoolname: {
            to: 'Pdo',
            ref: 'school'
        }
    });
    
    SchoolSchema.methods.resource = function(route_gen) {
        var res = new hal.Resource(this.toObject(),
            route_gen.path('get_school', {
                school_id: this._id
            }));

        res.link('programs', route_gen.path('get_school_programs', {
            school_id: this._id
        }));

        res.link('schools', route_gen.path('get_schools'));

        res.link('edit', route_gen.path('edit_school', {
            school_id: this._id
        }));
        res.link('delete', route_gen.path('delete_school', {
            school_id: this._id
        }));

        return res.toJSON();
    };

    mongoose.model('School', SchoolSchema);

}());