/**
 * Datos ficticios de la aplicacion
 */
'use strict';
var mongoose = require('mongoose');
var faker = require('faker');
var data = require('./data.js')();
var db = mongoose.connection;
var q = require('q');

db.on('error', console.error);
db.on('open', function() {
    console.log('Conectado a BD');
});

mongoose.connect('mongodb://gestor:gestor1234@localhost/mean-pdo'); // connect to our database

require('../models/models.js')
    .initialize();

var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Course = mongoose.model('Course');
var Grade = mongoose.model('Grade');

faker.locale = 'es';

var SchoolArray = [{
    schoolname: 'EPS',
    url: 'www.uah.es/politecnica',
    email: 'politecnica@uah.es'
}, {
    schoolname: 'Medicina',
    url: 'www.uah.es/medicina',
    email: 'medicina@uah.es'
}, {
    schoolname: 'Ciencias',
    url: 'www.uah.es/ciencias',
    email: 'ciecnias@uah.es'
}, {
    schoolname: 'Derecho',
    url: 'www.uah.es/derecho',
    email: 'derecho@uah.es'
}, {
    schoolname: 'CCSS',
    url: 'www.uah.es/ccss',
    email: 'ccss@uah.es'
}, {
    schoolname: 'Filosofía',
    url: 'www.uah.es/filosofia',
    email: 'filosofia@uah.es'
}, {
    schoolname: 'Educación',
    url: 'www.uah.es/educacion',
    email: 'educacion@uah.es'
}, {
    schoolname: 'Arquitectura',
    url: 'www.uah.es/arquitectura',
    email: 'arquitectura@uah.es'
}, {
    schoolname: 'Farmacia',
    url: 'www.uah.es/farmacia',
    email: 'farmacia@uah.es'
}];

var schools = [];
var prom_schools = q.defer();
for (var i = 0; i < data.Schools.length; i++) {

    var school = new School();
    school.schoolname = data.Schools[i].schoolname;
    school.url = data.Schools[i].url;
    school.email = data.Schools[i].email;
    school.school_codes = data.Schools[i].school_codes;
    school.save(function(err, school) {
        if (err) {
            prom_schools.reject(err);
        } else {
            schools.push(school);
        }
        if (i === schools.length) {
            prom_schools.resolve(schools);
        }
    });
};

prom_schools.promise.then(function(schools) {
	console.log('hecho!');
	//Aqui ya con todas las escuelas en schools puedo ir haciendo cada asignatura
	for(var i = 0; i < schools.length; i++){
		console.log(schools[i]);
	}
	mongoose.connection.close();

}).catch(function(err){
	console.log('error');
	console.log(err);
	mongoose.connection.close();
});