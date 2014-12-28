'use strict';
angular.module('pdouah.services', [])
    .factory('configService', ['CONSTANTS', '$http', '$window',
        function($CONSTANTS, $http, $window) {
            var basicUrl, schools, pdo, configService;
            basicUrl = $CONSTANTS.schema +
                $CONSTANTS.host + ':' +
                $CONSTANTS.port;
            schools = basicUrl + '/api/v1/school';
            pdo = basicUrl + '/api/v1/pdo';

            /*
            $http.get($CONSTANTS.schema +
                $CONSTANTS.host + ':' +
                $CONSTANTS.port + '/api/v1').then(function(resp) {
                basicUrl = resp.data.url;
                schools = resp.data.schools;
                pdo = resp.data.pdo;
            });
            */
            configService = {
                basicUrl: basicUrl,
                schools: schools,
                pdo: pdo,
                put: function(key, value) {
                    if (value !== undefined) {
                        $window.localStorage.setItem(key, JSON.stringify(value));
                        return true;
                    } else {
                        return false;
                    }
                },
                get: function(key) {
                    var value = $window.localStorage.getItem(key);
                    return (value && value.trim().length > 0) ? JSON.parse(value) : false;
                },
                delete: function(key) {
                    $window.localStorage.removeItem(key);
                }
            };
            return configService;
        }
    ]).factory('Schools', ['$q', '$http', 'configService',
        function($q, $http, $configService) {

            var url = $configService.schools;
            var schools = {};
            schools.query = function() {
                var defer = $q.defer(),
                    local_schools;
                local_schools = $configService.get('schools');
                if (local_schools) {
                    defer.resolve({
                        schools: local_schools
                    });
                    return defer.promise;
                }
                $http.get(url).success(function(data) {
                    $configService.put('schools', data);
                    defer.resolve({
                        schools: data
                    });
                }).error(function(reason) {
                    defer.reject(reason);
                });
                return defer.promise;
            };
            schools.load_programs = function(school) {
                var defer,
                    local_programs;
                local_programs = $configService.get('programs');
                if (typeof local_programs[school.schoolname] !== 'undefined') {
                    return $q.when({
                        programs: local_programs[school.schoolname]
                    });
                }
                defer = $q.defer();
                $http.get($configService.basicUrl + school._links.programs.href).success(function(data) {
                    if (local_programs === false) {
                        local_programs = {};
                    }
                    local_programs[school.schoolname] = data;
                    $configService.put('programs', local_programs);
                    defer.resolve({
                        programs: data
                    });
                }).error(function(reason) {
                    defer.reject(reason);
                });
                return defer.promise;

            };
            return schools;
        }
    ]).factory('Programs', ['$q', '$http', 'configService',
        function($q, $http, $configService) {
            var programs = {};
            /*
            programs.query = function() {
                var defer = $q.defer(),
                    local_programs;
                local_programs = $configService.get('programs');
                if (local_programs) {
                    defer.resolve({
                        programs: local_programs
                    });
                    return defer.promise;
                }
                $http.get(url).success(function(data) {
                    $configService.put('programs', data);
                    defer.resolve(data);
                }).error(function(reason) {
                    defer.reject(reason);
                });
                return defer.promise;
            };
            */
            programs.load_courses = function(program) {
                var defer, local_courses;
                local_courses = $configService.get('courses');
                if (local_courses === false) {
                    local_courses = {};
                }
                if (typeof local_courses[program.code] !== 'undefined') {
                    return $q.when({
                        courses: local_courses[program.code]
                    });
                }
                defer = $q.defer();
                $http.get($configService.basicUrl + program._links.courses.href).success(function(data) {
                    if (local_courses === false) {
                        local_courses = {};
                    }
                    local_courses[program.code] = data;
                    $configService.put('courses', local_courses);
                    defer.resolve({
                        courses: data
                    });
                }).error(function(reason) {
                    defer.reject(reason);
                });
                return defer.promise;
            };
            return programs;
        }
    ]);