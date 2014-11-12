var models = ['school.js', 'grade.js','course.js','pdo.js'];

exports.initialize = function() {
    var exportedModel;
    var l = models.length;
    for (var i = 0; i < l; i++) {
        exportedModel = require('./' + models[i]);
        exportedModel();
    }
};