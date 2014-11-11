// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


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

var port = process.env.PORT || 8081; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

require('./app/routes/routes.js').initialize(app);


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
console.log(app._router.stack);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log(Math.round(new Date()
    .getTime() / 1000));
console.log('Magic happens on porat ' + port);