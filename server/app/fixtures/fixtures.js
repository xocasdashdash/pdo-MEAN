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

function createCourse(course, index) {
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
    };
    return q.all(promesa_course_array);
}

function createProgram(program, index) {
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
var start = new Date().getTime();
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
        var finish;
        console.log('Cursos creados(' + courses.length + ')');
        finish = (new Date().getTime() - start) / 1000;
        console.log('Finish(' + finish + ')');

    }).fail(function(err) {
        console.log('Error!');
        console.log(err);

    }).done(function() {
        var valid_data = [{
            name: 'Grado en Derecho',
            num_asigs: 42
        }, {
            name: 'Grado en Contabilidad y Finanzas',
            num_asigs: 61
        }, {
            name: 'Grado en Economía y Negocios Internacionales',
            num_asigs: 91
        }, {
            name: 'Grado en Admón. y Dir. de Empresas',
            num_asigs: 103
        }, {
            name: 'Grado en Economía',
            num_asigs: 86
        }, {
            name: 'Doble Grado en Derecho y A.D.E.',
            num_asigs: 0
        }, {
            name: 'Lic. Administración y Dirección de Empresas',
            num_asigs: 21
        }, {
            name: 'Lic. Ciencias Actuariales y Financieras ',
            num_asigs: 15
        }, {
            name: 'Licenciatura en Economía',
            num_asigs: 29
        }, {
            name: 'Doble Grado en Humanidades y Magisterio de Educación Primaria',
            num_asigs: 12
        }, {
            name: 'Grado en Lenguas Modernas y Traducción',
            num_asigs: 59
        }, {
            name: 'Grado en Estudios Hispánicos',
            num_asigs: 52
        }, {
            name: 'Grado en Historia',
            num_asigs: 56
        }, {
            name: 'Grado en Humanidades',
            num_asigs: 51
        }, {
            name: 'Grado en Estudios Ingleses',
            num_asigs: 47
        }, {
            name: 'Licenciado en Filología Hispánica',
            num_asigs: 10
        }, {
            name: 'Licenciado en Historia',
            num_asigs: 22
        }, {
            name: 'Licenciado en Humanidades',
            num_asigs: 17
        }, {
            name: 'Grado en Fundamentos de Arquitectura y Urbanismo',
            num_asigs: 54
        }, {
            name: 'Grado en Arquitectura',
            num_asigs: 53
        }, {
            name: 'Arquitecto',
            num_asigs: 24
        }, {
            name: 'Ingeniero en Geodesia y Cartografía',
            num_asigs: 23
        }, {
            name: 'Grado en Ingeniería Electrónica de Comunicaciones',
            num_asigs: 46
        }, {
            name: 'Grado en Ingeniería en Electrónica y Automática Industrial',
            num_asigs: 43
        }, {
            name: 'Grado en Ingeniería en Sistemas de Telecomunicación',
            num_asigs: 47
        }, {
            name: 'Grado en Ingeniería en Tecnologías de la Telecomunicación ',
            num_asigs: 54
        }, {
            name: 'Grado en Ingeniería Telemática',
            num_asigs: 43
        }, {
            name: 'Ingeniero en Telecomunicación',
            num_asigs: 40
        }, {
            name: 'Ingeniero en Electronica',
            num_asigs: 17
        }, {
            name: 'Grado en Ingeniería Informática',
            num_asigs: 49
        }, {
            name: 'Grado en Sistemas de Información',
            num_asigs: 43
        }, {
            name: 'Grado en Ingeniería de Computadores',
            num_asigs: 48
        }, {
            name: 'Grado en Medicina',
            num_asigs: 43
        }, {
            name: 'Grado Ciencias Actividad Física y del Deporte',
            num_asigs: 52
        }, {
            name: 'Licenciado en Medicina',
            num_asigs: 31
        }, {
            name: 'Lic. Ciencias Actividad Física y del Deporte',
            num_asigs: 25
        }, {
            name: 'Grado en Enfermería',
            num_asigs: 27
        }, {
            name: 'Grado en Fisioterapia',
            num_asigs: 29
        }, {
            name: 'Grado en Ciencias Ambientales',
            num_asigs: 41
        }, {
            name: 'Grado en Química',
            num_asigs: 33
        }, {
            name: 'Grado en Biología',
            num_asigs: 41
        }, {
            name: 'Grado en Biología Sanitaria',
            num_asigs: 41
        }, {
            name: 'Licenciado en Biología',
            num_asigs: 40
        }, {
            name: 'Grado en Farmacia',
            num_asigs: 52
        }, {
            name: 'Licenciado en Farmacia',
            num_asigs: 39
        }, {
            name: 'Grado de Magisterio en Educación Infantil',
            num_asigs: 60
        }, {
            name: 'Grado de Magisterio en Educación Primaria',
            num_asigs: 65
        }, {
            name: 'Doble Grado en Turismo y Administración y Dirección de Empresas',
            num_asigs: 72
        }, {
            name: 'Grado en Admón. y Dirección de empresas',
            num_asigs: 45
        }, {
            name: 'Grado en Turismo',
            num_asigs: 49
        }, {
            name: 'Grado en Ciencia y Tecnología de la Edificación',
            num_asigs: 36
        }, {
            name: 'Grado en Enfermería',
            num_asigs: 32
        }, {
            name: 'Grado en Lenguas Modernas y Traducción (Guadalajara)',
            num_asigs: 59
        }, {
            name: 'Grado en Comunicación Audiovisual',
            num_asigs: 45
        }, {
            name: 'Grado en Psicología',
            num_asigs: 10
        }, {
            name: 'Grado en Educación Infantil (C. Adaptación)',
            num_asigs: 40
        }, {
            name: 'Grado en Educación Primaria (C. Adaptación)',
            num_asigs: 46
        }, {
            name: 'Grado en Educación Infantil (Semipresencial)',
            num_asigs: 40
        }, {
            name: 'Grado en Educación Primaria (Semipresencial)',
            num_asigs: 46
        }, {
            name: 'Grado en Educación Social (C. Adaptación)',
            num_asigs: 10
        }, {
            name: 'Grado en Educación Infantil',
            num_asigs: 44
        }, {
            name: 'Grado en Educación Primaria',
            num_asigs: 44
        }, {
            name: 'Grado en Educación Social',
            num_asigs: 36
        }, {
            name: 'Grado en Educación Infantil (bilingüe-Inglés)',
            num_asigs: 44
        }, {
            name: 'Grado en Educación Primaria (bilingüe-Inglés)',
            num_asigs: 44
        }];



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
            };
            for (var i = data.Programs.length - 1; i >= 0; i--) {
                obj2[data.Programs[i].name] = data.Programs[i].asignaturas.length;
            };
            console.log('Number of programs BD:' + Object.keys(obj).length);
            console.log('Number of programs json:' + Object.keys(obj2).length);
            var obj3 = {};
            for (var propName in obj2) {
                if (typeof(obj[propName]) === 'undefined') {
                    obj3[propName] = obj2[propName];
                }
            };
            console.log(obj3);
            //sconsole.log(obj);

            mongoose.connection.close();

        });




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