/*
Los datos sacados de la web tienen dos duplicados (G500 y G550) asi que les he puesto un 1 al final para diferenciarlos y que no de problemas
*/
'use strict';

var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var jf = require('jsonfile');
var q = require('q');

var encoding = 'iso-8859-1';
var grados = [{
    "name": "Grado en Farmacia",
    "code": "G57",
    "school_code": "104",
    "school": ""
}, {
    "name": "Licenciado en Farmacia",
    "code": "57",
    "school_code": "104",
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
            var a = $(this).text(),
                result_regex, asignatura = {};
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
    var file = 'data.test.json';
    jf.writeFile(file, grados, function(err) {
        if (err) {
            console.log(err);
        }
    });
});