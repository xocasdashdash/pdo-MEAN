var routes = ['school.js', 'pdo.js'];

exports.initialize = function(app) {
    var l = routes.length;
    for (var i = 0; i < l; i++) {
        require('./' + routes[i])(app);        
    }
};