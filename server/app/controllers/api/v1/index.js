'use strict';
module.exports = function (router) {
	router({
		name: 'basic_routes',
		path: '/'
	}).get(function (req,res) {
		var resp = {};
		resp.url = req.headers.host;
		resp.schools = req.route_gen.path('get_schools');
		resp.pdo = req.route_gen.path('create_pdo');
		res.send(resp);
	});
};