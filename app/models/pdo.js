/**
* DataModel of the app. 
Uses MongoDB for storage and mongoose for data access
*/
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;

module.exports = function() {
    var PdoSchema = new Schema({
        name: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isAlpha',
                message: 'Solamente numeros y letras'
            })
        },
        surname: {
            type: String,
            required: true,
            validate: validate({
                validator: 'isAlpha',
                message: 'Solamente numeros y letras'
            })
        },
        num_id: {
            type: String,
            required: true,
            validate: [validate({
                validator: 'isAlphanumeric',
                message: 'Solamente números y letras'
            })]
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
        }
    });
    mongoose.model('Pdo', PdoSchema);
}