'use strict';
var mongoose = require('mongoose');


module.exports = (function() {
    var Program = mongoose.model('Program');
    var Course = mongoose.model('Course');

    //Program Hooks
    Program.schema.pre('remove', function(next) {
        var prog = this;
        Course.find({
            program: prog._id
        }).remove();
    });
    //Course hooks
    Course.schema.pre('save', function(next) {
        var course = this;
        if (course.isNew) {
            Program.update({
                _id: course.program
            }, {
                $inc: {
                    number_of_courses: 1
                }
            }).exec();
        }
        next();
    });
    Course.schema.pre('remove', function(next) {
        var course = this;
        Program.update({
            _id: course.program
        }, {
            $inc: {
                number_of_courses: -1
            }
        }).exec();
        next();
    });

})();