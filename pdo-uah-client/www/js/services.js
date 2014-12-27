'use strict';
angular.module('pdouah.services', [])
    .factory('configService', ['CONSTANTS', '$window',
        function($CONSTANTS, $window) {
            return {
                host: $CONSTANTS.host,
                port: $CONSTANTS.port,
                schema: $CONSTANTS.schema,
                url: function() {
                    return this.schema + this.host + ':' + this.port;
                },
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
        }
    ]).factory('Schools', ['$q', '$http', 'configService',
        function($q, $http, $configService) {

            var url = $configService.url() + 'api/v1/school';
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
                var defer = $q.defer(),
                    local_programs;
                local_programs = $configService.get('programs');
                if (typeof local_programs[school.schoolname] !== 'undefined') {
                    defer.resolve({
                        programs: local_programs[school.schoolname]
                    });
                    return defer.promise;
                }
                $http.get($configService.url() + school._links.programs.href).success(function(data) {
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

            var url = $configService.url() + 'program';
            var programs = {};
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
            return programs;
        }
    ]);