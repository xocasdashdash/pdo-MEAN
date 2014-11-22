'use strict';
var models = ['school.js', 'program.js','course.js','user.js','pdo.js','pdo_group.js','pre_hooks.js'];

exports.initialize = function() {
    var l = models.length;
    for (var i = 0; i < l; i++) {
        require('./' + models[i]);        
    }
};