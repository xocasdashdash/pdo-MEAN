// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');


mongoose.connect('mongodb://gestor:gestor1234@localhost/mean-pdo'); // connect to our database

require('./app/models/models.js').initialize();

var Pdo = mongoose.model('Pdo');
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

router.route('/pdo')
//Crear un pisado
.post(function(req, res) {
	console.log('Recibida propuesta');
    var pdo = new Pdo();
    pdo.name = req.body.name;
    pdo.surname = req.body.surname;
    pdo.email = req.body.email;
    pdo.phone = req.body.phone;
    pdo.num_id = req.body.num_id;
    pdo.save(function(err) {
    	console.log(err);
        if (err) {
            res.send(err);
        }
        res.json('Pisado creado!'); 

    });
});



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);