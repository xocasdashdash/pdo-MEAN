var express = require('express'); // call express
var mongoose = require('mongoose');

var School = mongoose.model('School');

module.exports = function(app) {
    router = express.Router();
    router.route('/')
        .post(function(req, res) {
            var school = new School();
            school.schoolname = req.body.schoolname;
            school.url = req.body.url;
            school.email = req.body.email;
            school.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json(school);
            });
        })
        .get(function(req, res) {
            School.find({}, function(err, schools) {
                res.json(schools);
            });
        });
    router.route('/:school_id')
        .put(function(req, res) {
            School.findById(req.params.school_id, function(err, school) {
                if (err) {
                    res.send(err);
                }
                if (school === null) {
                    var error = new Error();
                    error.status = 404;
                    error.message = 'Escuela no encontrada';
                    res.send(error);
                } else {
                    school.schoolname = req.body.schoolname ? req.body.schoolname : school.schoolname;
                    school.email = req.body.email ? req.body.email : school.email;
                    school.url = req.body.url ? req.body.url : school.url;
                    school.save(function(err) {
                        if (err) {
                            res.send(err);
                        }
                        res.json(school);
                    });
                }

            });
        })
        .get(function(req, res) {
            School.findById(req.params.school_id, function(err, school) {
                if (err) {
                    res.send(err);
                }

            });
        });
    app.use('/school',router);
};