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
var logger = require('./app/log/log.js');
var cors = require('cors');
mongoose.connect(config.db.mongodb); // connect to our database

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + config.db.mongodb);
});
// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
    console.log('MongoURL:',  config.db.mongodb);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
});
// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


require('./app/models/models.js').initialize();

var events = require('./app/events/events.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    //Modifico el enrutador para que sea más facil de cargar
    req.route_gen = req.app.locals.enrouten;
    next();
});

app.use(function(req, res, next) {
    req.query.createdOnBefore = req.query.createdOnBefore ? moment.unix(req.query.createdOnBefore).format() : moment().format();
    req.query.limit = req.query.limit ? req.query.limit : 10;
    next();
});
//Enable CORS for all routes
app.use(cors());
//All the Routes are in the controllers directory
app.use(enrouten({
    directory: 'app/controllers'
}));


// START THE SERVER
// =============================================================================
app.listen(config.port, config.host, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});