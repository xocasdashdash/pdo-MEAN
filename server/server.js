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
var moment = require('moment');
var config = require('./config/config');


var dbURI = '';
mongoose.connect(config.db.mongodb); // connect to our database

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + config.db.mongodb);
});
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

app.use(function(req, res, next) {
    req.route_gen = req.app.locals.enrouten;
    next();
});

app.use(function(req, res, next) {
    req.query.createdOnBefore = req.query.createdOnBefore ? moment.unix(req.query.createdOnBefore).format() : moment().format();
    req.query.limit = req.query.limit ? req.query.limit : 2;
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