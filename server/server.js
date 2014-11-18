// server.js

// BASE SETUP
// =============================================================================
'use strict';

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var enrouten = require('express-enrouten');

mongoose.connect('mongodb://gestor:gestor1234@localhost/mean-pdo'); // connect to our database

require('./app/models/models.js')
    .initialize();

var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    req.route_gen = req.app.locals.enrouten;
    next();
});

var port = process.env.PORT || 8081; // set our port

//All the Routes are in the controllers directory
app.use(enrouten({
    directory: 'app/controllers'
}));


// START THE SERVER
// =============================================================================
app.listen(port);
console.log(Math.round(new Date()
    .getTime() / 1000));
console.log('Magic happens on porat ' + port);