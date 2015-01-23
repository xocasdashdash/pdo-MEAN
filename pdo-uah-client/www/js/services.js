/* global angular, cordova, StatusBar,_ */
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
            configService = {
                basicUrl: basicUrl,
                schools: schools,
                pdo: pdo,
                put: function(key, value) {
                    if (value !== undefined) {
                        $window.localStorage.setItem(key,
                            JSON.stringify(value));
                        return true;
                    } else {
                        return false;
                    }
                },
                get: function(key) {
                    var value = $window.localStorage.getItem(key);
                    return (value && value.trim().length > 0) ?
                        JSON.parse(value) : false;
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
            schools.findById = function(schoolId) {
                var defer = $q.defer(),
                    school_index = -1,
                    schools;
                schools = $configService.get('schools');
                if (schools.length === 0) {
                    defer.reject('No schools loaded');
                    return defer.promise;
                }
                for (var i = schools.length - 1; i >= 0 && school_index === -1; i--) {
                    if (schools[i]._id === schoolId) {
                        school_index = i;
                    }
                }

                if (school_index === -1) {
                    defer.reject('No schools loaded');
                    return defer.promise;
                }
                defer.resolve(schools[school_index]);
                return defer.promise;
            };
            schools.load_programs = function(school) {
                var defer,
                    local_programs;
                if (school === null ||
                    typeof school === 'undefined' ||
                    typeof school.schoolname === 'undefined') {
                    return $q.when({
                        programs: []
                    });
                }
                local_programs = $configService.get('programs');
                if (typeof local_programs[school.schoolname] !==
                    'undefined') {
                    return $q.when({
                        programs: local_programs[school.schoolname]
                    });
                }
                defer = $q.defer();
                $http.get($configService.basicUrl +
                    school._links.programs.href).success(function(data) {
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
            programs.load_courses = function(program) {
                var defer, local_courses;
                if (program === null ||
                    typeof program === 'undefined' ||
                    typeof program.code === 'undefined') {
                    return $q.when({
                        courses: []
                    });
                }
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
                $http.get($configService.basicUrl +
                    program._links.courses.href).success(function(data) {
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
            programs.findById = function(schoolName, programId) {
                var defer = $q.defer(),
                    program, programs, program_index = -1;
                programs = $configService.get('programs')[schoolName];
                if (programs.length === 0) {
                    defer.reject('No programs loaded');
                    return defer.promise;
                }
                for (var i = programs.length - 1; i >= 0 && program_index === -1; i--) {
                    if (programs[i]._id === programId) {
                        program_index = i;
                    }
                }
                if (program_index === -1) {
                    defer.reject('No programs loaded');
                    return defer.promise;
                }
                defer.resolve(programs[program_index]);
                return defer.promise;
            };
            return programs;
        }
    ]).factory('Pdo', ['$q', '$http', 'configService',
        function($q, $http, $configService) {
            var pdo = {};
            pdo.sendPdo = function(pdo) {
                var defer = $q.defer();
                $http.post($configService.pdo, pdo).success(
                    function(data) {
                        defer.resolve({
                            pdo: data
                        });
                    }).error(function(reason) {
                    defer.reject(reason);
                });
                return defer.promise;
            };
            return pdo;
        }
    ]);