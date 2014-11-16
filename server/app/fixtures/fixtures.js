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
var bcrypt = require('bcrypt');


require('../models/models.js')
    .initialize();

var db_conn = mongoose.connection;
var q = require('q');


var Pdo = mongoose.model('Pdo');
var School = mongoose.model('School');
var Course = mongoose.model('Course');
var Program = mongoose.model('Program');
var User = mongoose.model('User');
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
    School.remove().exec().then(function() {
        console.log('Escuelas borradas');
        return Pdo.remove().exec();
    }).then(function() {
        console.log('PDO borrado');
        return Course.remove().exec();
    }).then(function() {
        console.log('Programas borrados');
        return Program.remove().exec();
    }).then(function() {
        console.log('Cursos borrados');
        return User.remove().exec();
    }).then(function(argument) {
            console.log('Usuarios borrados');
            console.log('BD Limpia');
            deferred.resolve();
        },
        function(err) {
            console.log(JSON.stringify(err, null, 2));
            deferred.reject(err);
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

function createCourse(course, index) {
    /*jshint validthis: true */
    var deferred = q.defer(),
        c;
    c = new Course();
    c.name = course.name;
    c.code = course.code;
    c.program = this.id;
    c.save(function(err, c) {
        if (err) {
            deferred.reject(err);
        }
        deferred.resolve(c);
    });
    return deferred.promise;
}

function createCourses(programs) {
    var counter = 0,
        c, promesa_course_array = [],
        asignaturas;
    for (var i = 0; i < programs.length; i++) {
        promesa_course_array = promesa_course_array.concat(
            _.findWhere(data.Programs, {
                code: programs[i].code
            }).asignaturas.map(createCourse, programs[i]));
    }
    return q.all(promesa_course_array);
}

function createProgram(program, index) {
    /*jshint validthis: true */
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
        deferred.resolve(p);
    });
    return deferred.promise;
}

function createPrograms(schools) {
    var programs = [],
        promesa_prog_array = [];

    for (var i = 0; i < schools.length; i++) {
        promesa_prog_array = promesa_prog_array.concat(_.where(data.Programs, {
            school_code: schools[i].school_code
        }).map(createProgram, schools[i]));
    }
    return q.all(promesa_prog_array);
}

function createUsers() {
    var promesa_user_array = [];
    promesa_user_array = data.Users.map(function(element, index) {
        var deferred = q.defer(),
            u;
        u = new User();
        u.username = element.username;
        u.email = element.email;
        u.role = element.role;
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return deferred.reject(err);
            }

            bcrypt.hash(element.password, salt, function(err, hash) {
                u.password = hash;
                if (err) {
                    deferred.reject(err);
                }
                u.save(function(err, u) {
                    if (err) {
                        deferred.reject(err);
                    }
                    deferred.resolve(u);
                });
            });

        });
        return deferred.promise;
    });
    return q.all(promesa_user_array);
}
var start = new Date().getTime();
defer_db_conn.promise.then(resetData)
    .then(createSchools)
    .then(function(schools) {
        var schools_filtered = [];
        console.log('Escuelas creadas(' + schools.length + ')');

        function filterSchool(e, i) {
            for (var j = 0; j < e.school_codes.length; j++) {
                var filtered_school = {};
                filtered_school = {};
                filtered_school.id = e._id;
                filtered_school.school_code = e.school_codes[j];
                filtered_school.schoolname = e.schoolname;
                schools_filtered.push(filtered_school);
            }
            return;
        }
        schools.map(filterSchool);
        return createPrograms(schools_filtered);

    }).then(function(programs) {
        console.log('Programas creados(' + programs.length + ')');
        return createCourses(programs);

    }).then(function(courses) {
        console.log('Cursos creados(' + courses.length + ')');

        return createUsers();
    }).then(function(users) {
        var finish;
        console.log('Usuarios creados(' + users.length + ')');
        finish = (new Date().getTime() - start) / 1000;
        console.log('Finish(' + finish + ')');
    })
/*.fail(function(err) {
        console.log('Error!');
        console.log(err);

    })*/
.done(function() {
    Course.find({}).find(function(err, result) {
        var elem;
        var course_filtered = [];
        var obj = {}, obj2 = {};
        var sum;
        for (var i = result.length - 1; i >= 0; i--) {
            if (typeof(obj[result[i].program_name]) === 'undefined') {
                obj[result[i].program_name] = 1;
            } else {
                obj[result[i].program_name]++;
            }
        }
        for (i = data.Programs.length - 1; i >= 0; i--) {
            obj2[data.Programs[i].name] = data.Programs[i].asignaturas.length;
        }
        console.log('Number of programs BD:' + Object.keys(obj).length);
        console.log('Number of programs json:' + Object.keys(obj2).length);
        var obj3 = {};
        for (var propName in obj2) {
            if (typeof(obj[propName]) === 'undefined') {
                obj3[propName] = obj2[propName];
            }
        }
        console.log(obj3);
        //sconsole.log(obj);

        mongoose.connection.close();

    });
});