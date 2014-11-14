var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var jf = require('jsonfile');
var q = require('q');

var encoding = 'iso-8859-1';
grados = [{
    "name": "Grado en Derecho",
    "code": "G400",
    "school_code": "105",
    "school": ""
}, {
    "name": "Grado en Contabilidad y Finanzas",
    "code": "G341",
    "school_code": "103",
    "school": ""
}, {
    "name": "Grado en Economía y Negocios Internacionales",
    "code": "G361",
    "school_code": "103",
    "school": ""
}, {
    "name": "Grado en Admón. y Dir. de Empresas",
    "code": "G340",
    "school_code": "103",
    "school": ""
}, {
    "name": "Grado en Economía",
    "code": "G360",
    "school_code": "103",
    "school": ""
}, {
    "name": "Doble Grado en Derecho y A.D.E.",
    "code": "G401",
    "school_code": "105",
    "school": ""
}, {
    "name": "Lic. Administración y Dirección de Empresas",
    "code": "340",
    "school_code": "103",
    "school": ""
}, {
    "name": "Lic. Ciencias Actuariales y Financieras ",
    "code": "350",
    "school_code": "103",
    "school": ""
}, {
    "name": "Licenciatura en Economía",
    "code": "360",
    "school_code": "103",
    "school": ""
}, {
    "name": "Doble Grado en Humanidades y Magisterio de Educación Primaria",
    "code": "G470",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Lenguas Modernas y Traducción",
    "code": "G791",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Estudios Hispánicos",
    "code": "G790",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Historia",
    "code": "G250",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Humanidades",
    "code": "G252",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Estudios Ingleses",
    "code": "G251",
    "school_code": "106",
    "school": ""
}, {
    "name": "Licenciado en Filología Hispánica",
    "code": "790",
    "school_code": "106",
    "school": ""
}, {
    "name": "Licenciado en Historia",
    "code": "250",
    "school_code": "106",
    "school": ""
}, {
    "name": "Licenciado en Humanidades",
    "code": "252",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Fundamentos de Arquitectura y Urbanismo",
    "code": "G256",
    "school_code": "209",
    "school": ""
}, {
    "name": "Grado en Arquitectura",
    "code": "G254",
    "school_code": "209",
    "school": ""
}, {
    "name": "Arquitecto",
    "code": "254",
    "school_code": "209",
    "school": ""
}, {
    "name": "Ingeniero en Geodesia y Cartografía",
    "code": "161",
    "school_code": "209",
    "school": ""
}, {
    "name": "Grado en Ingeniería Electrónica de Comunicaciones",
    "code": "G37",
    "school_code": "203",
    "school": ""
}, {
    "name": "Grado en Ingeniería en Electrónica y Automática Industrial",
    "code": "G60",
    "school_code": "203",
    "school": ""
}, {
    "name": "Grado en Ingeniería en Sistemas de Telecomunicación",
    "code": "G39",
    "school_code": "203",
    "school": ""
}, {
    "name": "Grado en Ingeniería en Tecnologías de la Telecomunicación ",
    "code": "G35",
    "school_code": "203",
    "school": ""
}, {
    "name": "Grado en Ingeniería Telemática",
    "code": "G38",
    "school_code": "203",
    "school": ""
}, {
    "name": "Ingeniero en Telecomunicación",
    "code": "177",
    "school_code": "203",
    "school": ""
}, {
    "name": "Ingeniero en Electronica",
    "code": "178",
    "school_code": "203",
    "school": ""
}, {
    "name": "Grado en Ingeniería Informática",
    "code": "G780",
    "school_code": "210",
    "school": ""
}, {
    "name": "Grado en Sistemas de Información",
    "code": "G58",
    "school_code": "210",
    "school": ""
}, {
    "name": "Grado en Ingeniería de Computadores",
    "code": "G59",
    "school_code": "210",
    "school": ""
}, {
    "name": "Grado en Medicina",
    "code": "G215",
    "school_code": "101",
    "school": ""
}, {
    "name": "Grado Ciencias Actividad Física y del Deporte",
    "code": "G770",
    "school_code": "101",
    "school": ""
}, {
    "name": "Licenciado en Medicina",
    "code": "215",
    "school_code": "101",
    "school": ""
}, {
    "name": "Lic. Ciencias Actividad Física y del Deporte",
    "code": "770",
    "school_code": "101",
    "school": ""
}, {
    "name": "Grado en Enfermería",
    "code": "G209",
    "school_code": "205",
    "school": ""
}, {
    "name": "Grado en Fisioterapia",
    "code": "G249",
    "school_code": "205",
    "school": ""
}, {
    "name": "Grado en Ciencias Ambientales",
    "code": "G670",
    "school_code": "107",
    "school": ""
}, {
    "name": "Grado en Química",
    "code": "G660",
    "school_code": "110",
    "school": ""
}, {
    "name": "Grado en Biología",
    "code": "G650",
    "school_code": "102",
    "school": ""
}, {
    "name": "Grado en Biología Sanitaria",
    "code": "G651",
    "school_code": "102",
    "school": ""
}, {
    "name": "Licenciado en Biología",
    "code": "650",
    "school_code": "102",
    "school": ""
}, {
    "name": "Grado en Farmacia",
    "code": "G57",
    "school_code": "104",
    "school": ""
}, {
    "name": "Licenciado en Farmacia",
    "code": "57",
    "school_code": "104",
    "school": ""
}, {
    "name": "Grado de Magisterio en Educación Infantil",
    "code": "G420",
    "school_code": "202",
    "school": ""
}, {
    "name": "Grado de Magisterio en Educación Primaria",
    "code": "G430",
    "school_code": "202",
    "school": ""
}, {
    "name": "Doble Grado en Turismo y Administración y Dirección de Empresas",
    "code": "G450",
    "school_code": "208",
    "school": ""
}, {
    "name": "Grado en Admón. y Dirección de empresas",
    "code": "G410",
    "school_code": "206",
    "school": ""
}, {
    "name": "Grado en Turismo",
    "code": "G680",
    "school_code": "208",
    "school": ""
}, {
    "name": "Grado en Ciencia y Tecnología de la Edificación",
    "code": "G253",
    "school_code": "207",
    "school": ""
}, {
    "name": "Grado en Enfermería",
    "code": "G255",
    "school_code": "201",
    "school": ""
}, {
    "name": "Grado en Lenguas Modernas y Traducción (Guadalajara)",
    "code": "G440",
    "school_code": "106",
    "school": ""
}, {
    "name": "Grado en Comunicación Audiovisual",
    "code": "G641",
    "school_code": "109",
    "school": ""
}, {
    "name": "Grado en Psicología",
    "code": "G562",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Infantil (C. Adaptación)",
    "code": "G500",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Primaria (C. Adaptación)",
    "code": "G550",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Infantil (Semipresencial)",
    "code": "G500",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Primaria (Semipresencial)",
    "code": "G550",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Social (C. Adaptación)",
    "code": "G561",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Infantil",
    "code": "G510",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Primaria",
    "code": "G520",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Social",
    "code": "G560",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Infantil (bilingüe-Inglés)",
    "code": "G530",
    "school_code": "204",
    "school": ""
}, {
    "name": "Grado en Educación Primaria (bilingüe-Inglés)",
    "code": "G540",
    "school_code": "204",
    "school": ""
}];

var i = 0;
var defer = q.defer();
var regex_nombre_code = /(.*)\ \((.+)\)/;

var req_callback = function(index, defer) {
    return function(err, resp, bod) {
        var $, body;
        body = iconv.decode(bod, encoding);
        $ = cheerio.load(body);
        var p = $('.table td a.popup');
        p.each(function(j, elem) {
            var a = $(this)
                .text(),
                result_regex;
            asignatura = {};
            result_regex = regex_nombre_code.exec(a);
            if (result_regex !== null) {

                asignatura.name = result_regex[1];
                asignatura.code = result_regex[2];
            } else {
                asignatura.name = a;
                asignatura.code = '';
            }
            grados[index].asignaturas.push(asignatura);

        });
        if (index === (grados.length - 1)) {
            defer.resolve();
        }
    };
};
for (i = 0; i < grados.length; i++) {
    var url = 'http://www.uah.es/estudios/asignaturas/lstAsignaturas_v3.asp?CodCentro=' +
        grados[i].school_code + '&CodPlan=' + grados[i].code;
    grados[i].asignaturas = [];
    //url = 'http://www.uah.es/estudios/asignaturas/lstAsignaturas_v3.asp?CodCentro=204&CodPlan=G560'
    request.get({
        url: url,
        encoding: null
    }, req_callback(i, defer));
}
defer.promise.then(function() {
    var file = 'data.json';
    jf.writeFile(file, grados, function(err) {
        if (err) {
            console.log(err);
        }
    });
});