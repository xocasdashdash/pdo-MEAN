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
        },
        number_of_courses: {
            type: Number,
            default: 0
        },
        created_on: {
            type: Date,
            default: Date.now
        }
    });
    ProgramSchema.plugin(denormalize, {
        schoolname: {
            from: 'school'
        }
    });
    ProgramSchema.methods.resource = function(route_gen) {
        var res = new hal.Resource(
            this.toObject(), route_gen.path('get_program', {
                program_id: this._id
            }));

        res.link('courses', route_gen.path('get_program_courses', {
            program_id: this._id
        }));

        res.link('edit', route_gen.path('edit_program', {
            program_id: this._id
        }));

        res.link('delete', route_gen.path('delete_program', {
            program_id: this._id
        }));
        
        return res.toJSON();
    };
    mongoose.model('Program', ProgramSchema);
})();