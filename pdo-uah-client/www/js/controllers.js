'use strict';
angular.module('pdouah.controllers', [])
//Main controller
.controller('PdoMainCtrl', function($scope, $state) {

    $scope.goToReport = function() {
        $state.go('pdo.report');
    };
    $scope.goToHistory = function() {
        $state.go('pdo.history.list');
    };
})
//PDO Report Ctrl
.controller('PdoReportCtrl', ['Schools', 'Programs', 'Pdo', 'configService', '$scope', '$ionicPopup', '$q', '$state',

    function(Schools, Programs, Pdo, configService, $scope, $ionicPopup, $q, $state) {
        var prom_programs_loaded = $q.defer();
        $scope.schools = [];
        $scope.courses = [];
        $scope.programs = [];
        $scope.pdo = {};
        $scope.viewTitle = $state.current.data.viewTitle;

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
        $scope.edit = function() {
            $('.personal-data-edit').show();
            $('.personal-data.edit').hide();
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
                        if (!configService.get('personalData')) {
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
                        } else {
                            var personalData = {};
                            personalData.name = $scope.pdo.name;
                            personalData.surname = $scope.pdo.surname;
                            personalData.phone = $scope.pdo.phone;
                            personalData.program_id = $scope.pdo.program._id;
                            personalData.school_id = $scope.pdo.school._id;
                            personalData.num_id = $scope.pdo.num_id;
                            personalData.email = $scope.pdo.email;
                            configService.put('personalData', personalData);
                        }
                        configService.push('pdoStore', data.pdo);
                        $state.go('pdo.history.detail', {
                            pdoId: data.pdo._id
                        });
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
                        $scope.pdo.num_id = parseInt(personalData.num_id, 10);
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
                                } else {}
                            }).
                            catch (function(reason) {
                                console.error('No encontrada:', reason);
                            });
                        }
                        $('.personal-data-edit').hide();
                        if (!personalData.school_id) {
                            $('.personal-data-edit.school').show();
                        }
                        if (!personalData.program_id) {
                            $('.personal-data-edit.program').show();
                        }
                    }
                } else {
                    console.log('You are not sure');
                }
            });
        } else {
            $scope.edit();
        }

    }
])
//History Ctrl
.controller('PdoHistoryListCtrl', ['$scope', '$stateParams', 'Pdo', '$state',
    function($scope, $stateParams, Pdo, $state) {
        $scope.storedPdos = [];
        $scope.viewTitle = $state.current.data.viewTitle;
        Pdo.getStoredPdos().then(
            function(pdos) {
                $scope.storedPdos = pdos;
            }).
        catch (function(reason) {
            console.error('PdoNotFound', reason);
        });

    }
])
//Controller Basico
.controller('PdoHistoryCtrl', function($scope, $state) {
    //console.log('cargado historico basico!');
    //console.log('state:', $state);
})
//Controller de la vista detalle
.controller('PdoHistoryDetailCtrl', ['$scope', '$stateParams', 'Schools', 'Programs', 'Pdo', '$state','configService',
    function($scope, $stateParams, School, Program, Pdo, $state, configService) {
        $scope.viewTitle = $state.current.data.viewTitle;
        $scope.oneAtATime = true;
        $scope.status = {};
        $scope.commentResolved = false;
        $scope.config = configService;
        Pdo.getComments($stateParams.pdoId).then(function(pdo_comments) {
            $scope.pdo_comments = pdo_comments.map(function(e, i) {
                e.isOpen = false;
                return e;
            });
            $scope.commentResolved = true;
        }).
        catch (function(reason) {
            $scope.pdo_comments = [];
            $scope.commentResolved = true;
            console.error(reason);
        });
        Pdo.getById($stateParams.pdoId).then(function(pdo) {
            $scope.pdo = pdo;
        }).
        catch (function(reason) {
            console.error('Error', reason);
        });
    }
])
//Basic Ctrl
.controller('PdoBasicCtrl', function($scope) {});