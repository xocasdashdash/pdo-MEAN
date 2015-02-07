'use strict';
module.exports = function(router) {
    router({
        name: 'basic_routes',
        path: '/'
    }).get(function(req, res) {
        var resp = {};
        resp.url = req.headers.host;
        resp.schools = req.route_gen.path('get_schools');
        resp.pdo = req.route_gen.path('create_pdo')+
            '?limit=10&createdOnBefore=' + Math.floor(new Date().getTime() / 1000);
        resp.programs = req.route_gen.path('get_programs')+
            '?limit=10&createdOnBefore=' + Math.floor(new Date().getTime() / 1000);
        resp.courses = req.route_gen.path('get_courses') +
            '?limit=10&createdOnBefore=' + Math.floor(new Date().getTime() / 1000);
        res.send(resp);
    });
};