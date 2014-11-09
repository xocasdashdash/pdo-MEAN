/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;

module.exports = function() {
    var SchoolSchema = new Schema({
        name: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isAlphanumeric',
                message: 'Solamente numeros y letras'
            })
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
        }
    });
    mongoose.model('School', SchoolSchema);
}