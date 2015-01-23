'use strict';
angular.module('pdouah.controllers', [])
//Main controller
.controller('PdoMainCtrl', function($scope, $state) {

    $scope.goToReport = function() {
        $state.go('pdo.report');
    };
    $scope.goToHistory = function() {
        $state.go('pdo.history');
    };
})
//PDO Report Ctrl
.controller('PdoReportCtrl', ['Schools', 'Programs', 'Pdo', 'configService', '$scope', '$ionicPopup', '$q',

    function(Schools, Programs, Pdo, configService, $scope, $ionicPopup, $q) {
        var prom_programs_loaded = $q.defer();
        $scope.schools = [];
        $scope.courses = [];
        $scope.programs = [];
        $scope.pdo = {};

        Schools.query().then(function(data) {
            $scope.schools = data.schools;
        }).
        catch (function(reason) {
            console.error(reason);
        });
        $scope.schoolChanged = function(newSchool) {
            //Actualizo el model de las asignaturas
            Schools.load_programs(newSchool).then(function(data) {
                $scope.programs = data.programs;
                if (!$scope.$$phase) {
                    $scope.$apply(); //this triggers a $digest
                }
            }).
            catch (function(reason) {
                console.error(reason);
            });

        };
        $scope.programChanged = function(newProgram) {
            if (typeof newProgram === 'undefined') {
                $scope.courses = [];
                return;
            }
            Programs.load_courses(newProgram).then(function(data) {
                $scope.courses = data.courses;
                if (!$scope.$$phase) {
                    $scope.$apply(); //this triggers a $digest
                }
            }).
            catch (function(reason) {
                console.error(reason);
            });   

        };
        $scope.courseChanged = function(newCourse) {
            console.log(newCourse);
        };
        // A confirm dialog
        $scope.send = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Enviar P.do',
                template: '¿Estás seguro que quieres enviar el P.do tal y como está??'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    Pdo.sendPdo($scope.pdo).then(function(data) {
                        var confirmPopupSaveData = $ionicPopup.confirm({
                            title: 'P.do enviado!',
                            template: '¿Quieres guardar tus datos para un proximo pdo?'
                        });
                        confirmPopupSaveData.then(function(res) {
                            if (res) {
                                var personalData = {};
                                personalData.name = $scope.pdo.name;
                                personalData.surname = $scope.pdo.surname;
                                personalData.phone = $scope.pdo.phone;
                                personalData.program_id = $scope.pdo.program._id;
                                personalData.school_id = $scope.pdo.school._id;
                                personalData.num_id = $scope.pdo.num_id;
                                personalData.email = $scope.pdo.email;
                                configService.put('personalData', personalData);

                            } else {
                                console.log('You are not sure');
                            }
                        });
                        console.log('Datos enviados');
                        console.log('Datos:', data);

                    }, function(reason) {
                        console.log('Razon:', reason);
                    });
                } else {
                    console.log('You are not sure');
                }
            });
        };
        if (configService.get('personalData')) {
            var loadSavedData = $ionicPopup.confirm({
                title: 'Datos personales detectados!',
                template: '¿Quieres cargar tus datos guardados?'
            });
            loadSavedData.then(function(res) {
                if (res) {
                    var personalData = configService.get('personalData');
                    if (personalData) {
                        $scope.pdo.name = personalData.name;
                        $scope.pdo.surname = personalData.surname;
                        $scope.pdo.phone = personalData.phone;
                        $scope.pdo.num_id = personalData.num_id;
                        $scope.pdo.email = personalData.email;
                        if (personalData.school_id) {
                            Schools.findById(personalData.school_id).then(function(school) {
                                $scope.pdo.school = school;
                                if (personalData.program_id) {
                                    //Si hay un dato de programa guardado
                                    Schools.load_programs($scope.pdo.school).then(function(data) {
                                        $scope.programs = data.programs;
                                        Programs.findById($scope.pdo.school.schoolname, personalData.program_id).then(function(program) {
                                            $scope.pdo.program = program;
                                        }).
                                        catch (function(reason) {
                                            console.error('No encontrado:', reason);
                                        });
                                    }).
                                    catch (function(reason) {
                                        console.error(reason);
                                    });
                                }
                            }).
                            catch (function(reason) {
                                console.error('No encontrada:', reason);
                            });
                        }

                    }

                } else {
                    console.log('You are not sure');
                }
            });
        }

    }
])
//History Ctrl
.controller('PdoHistoryCtrl', function($scope) {})
//Basic Ctrl
.controller('PdoBasicCtrl', function($scope) {});