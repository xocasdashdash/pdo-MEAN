/**
 * Datos ficticios de la aplicacion
 */
'use strict';
// Requires
var mongoose = require('mongoose');
var faker = require('faker');
var data = require('./data.js');
var async = require('async');
var _ = require('underscore');
var wait = require('wait.for');


require('../models/models.js')
    .initialize();

var db_conn = mongoose.connection;
var q = require('q');


var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Course = mongoose.model('Course');
var Program = mongoose.model('Program');
var db;


var defer_db_conn = q.defer();
db_conn.on('error', console.error);

db_conn.on('open', function() {
    console.log('Conectado a BD');
    db = mongoose.connection.db;
    defer_db_conn.resolve(db);
    /*for(var propName in defer_db_conn.promise){
    	console.log(propName);
    	console.log(defer_db_conn.promise[propName]);	
    }*/

});

mongoose.connect('mongodb://gestor:gestor1234@localhost/mean-pdo'); // connect to our database

function resetData(db) {
    var counter = 0,
        counter_limit = 3,
        deferred;
    deferred = q.defer();
    console.log('Borrando escuelas');
    School.remove({}, function(err) {
        console.log('Escuelas borradas');
        if (err) {
            deferred.reject(err);
        } else {
            if (counter < counter_limit) {
                counter = counter + 1;
            } else {
                deferred.resolve();
            }
        }
    });

    Pdo.collection.remove({}, function(err) {
        console.log('PDO borrado');
        if (err) {
            deferred.reject(err);
        } else {
            if (counter < counter_limit) {
                counter = counter + 1;

            } else {
                deferred.resolve();
            }
        }
    });

    Course.collection.remove({}, function(err) {
        console.log('Cursos borrados');
        if (err) {
            deferred.reject(err);
        } else {
            if (counter < counter_limit) {
                counter = counter + 1;
            } else {
                deferred.resolve();
            }
        }
    });

    Program.collection.remove({}, function(err) {
        console.log('Programas borrados');
        if (err) {
            deferred.reject(err);
        } else {
            if (counter < counter_limit) {
                counter = counter + 1;
            } else {
                deferred.resolve();
            }
        }
    });
    return deferred.promise;
}

function createSchools() {
    var deferred = q.defer(),
        schools = [],
        counter = 1;

    function saveSchool(err, school) {
        if (err) {
            deferred.reject(err);
        } else {
            schools.push(school);
        }
        if (counter < data.Schools.length) {
            counter++;
        } else {
            deferred.resolve(schools);
        }
    }
    for (var i = 0; i < data.Schools.length; i++) {
        var school = new School();
        school.schoolname = data.Schools[i].schoolname;
        school.url = data.Schools[i].url;
        school.email = data.Schools[i].email;
        school.school_codes = data.Schools[i].school_codes;
        school.save(saveSchool);
    }
    return deferred.promise;
}

function createCourse(course,index){
	var deferred = q.defer(),
        c;

    c = new Course();
    c.name = course.name;
    c.code = course.code;
    c.school = this.id;
    c.save(function(err, c) {
        if (err) {
            deferred.reject(err);
        }
        deferred.resolve();
    });
    return deferred.promise;
}
function createCourses(program, courses) {
    var counter = 0,
        c;

    function courseSave(err, course) {
        if (err) {
            deferred.reject(err);
        } else {
            if (counter < courses.length) {
                counter = counter + 1;
            } else {
                deferred.resolve(program);
            }
        }
    }
    for (var i = courses.length - 1; i >= 0; i--) {
        c = new Course();
        c.name = courses[i].name;
        c.code = courses[i].code;
        c.program = program._id;
        c.save(courseSave);
    };
    console.log('Creados cursos del programa: ' + program.name);
    return;

}

function createPrograms_aux(program, index) {
    var deferred = q.defer(),
        p;

    p = new Program();
    p.name = program.name;
    p.code = program.code;
    p.school = this.id;
    p.save(function(err, p) {
        if (err) {
            deferred.reject(err);
        }
        deferred.resolve();
    });
    return deferred.promise;
}

function createPrograms(schools) {
    var programs = [],
        promesa_prog_array = [];

    for (var i = 0; i < schools.length; i++) {
        promesa_prog_array.concat(
            _.where(data.Programs, {
                school_code: schools[i].school_code
            }).map(createPrograms_aux, schools[i]));
    }

    return q.all(promesa_prog_array);

}
console.log('Start:' + new Date().getTime());
defer_db_conn.promise.then(resetData)
    .then(function() {
        return createSchools();
    }).then(function(schools) {
        var schools_filtered = [];
        console.log('Escuelas creadas(' + schools.length + ')');

        function filterSchool(e, i) {
            for (var j = 0; j < e.school_codes.length; j++) {
                var filtered_school = {};
                filtered_school = {};
                filtered_school.id = e._id;
                filtered_school.school_code = e.school_codes[j];
                filtered_school.schoolname = e.schoolname;
                return filtered_school;
            }
        }
        schools_filtered = schools.map(filterSchool);
        return createPrograms(schools_filtered);

    }).then(function(data) {
        console.log('Programas creados(' + data.length + ')');
        console.log('Finish(' + new Date().getTime() + ')');
    })
/*  .
/*catch (function(err) {
    console.log('Error!');
    console.log(err);

})*/
.
done(function() {
    mongoose.connection.close();
});


/*console.log(drop_promise_collection);
q.all(drop_promise_collection)
    .then(function() {
        faker.locale = 'es';

        

        prom_schools.promise.then(function(schools) {
            console.log('hecho!');
            //Aqui ya con todas las escuelas en schools puedo ir haciendo cada asignatura
            for (var i = 0; i < schools.length; i++) {
                //console.log(schools[i]);
            }
            mongoose.connection.close();

        }, function(err) {
            console.log('error');
            console.log(err);
            mongoose.connection.close();
        });
    }, console.error);*/