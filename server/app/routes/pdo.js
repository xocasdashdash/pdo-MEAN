var express = require('express'); // call express
var mongoose = require('mongoose');

var School = mongoose.model('School');
var Pdo = mongoose.model('Pdo');
module.exports = function(app) {
    router = express.Router();
    router.route('/')
    //Crear un pisado
    .post(function(req, res) {
        var pdo = new Pdo();
        pdo.name = req.body.name;
        pdo.surname = req.body.surname;
        pdo.email = req.body.email;
        pdo.phone = req.body.phone;
        pdo.num_id = req.body.num_id;
        School.findOne({
            schoolname: req.body.schoolname
        }, function(err, school) {
            if (err) {
                res.send(err);
            }
            pdo.school = school;
            pdo.save(function(err) {
                console.log(err);
                if (err) {
                    res.send(err);
                }
                res.json(pdo);

            });
        });
    });
    app.use('/pdo', router);
};