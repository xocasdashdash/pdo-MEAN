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
.controller('PdoReportCtrl', ['Schools', 'Programs','$scope',
    function(Schools, Programs,$scope) {
        $scope.school = {};
        $scope.programs_bkp = {
            '1': [{
                _id: '1',
                name: 'Programa 1'
            }, {
                _id: '2',
                name: 'Programa 2'
            }, {
                _id: '3',
                name: 'Programa 3'
            }],
            '2': [{
                _id: '11',
                name: 'Programa 2-1'
            }, {
                _id: '2',
                name: 'Programa 2-2'
            }, {
                _id: '3',
                name: 'Programa 2-3'
            }]
        };

        $scope.courses_bkp = {
            '1': [{
                _id: '1',
                name: 'Curso 1-1'
            }, {
                _id: '2',
                name: 'Curso 1-2'
            }, {
                _id: '3',
                name: 'Curso 1-3'
            }, {
                _id: '4',
                name: 'Curso 1-4'
            }],
            '2': [{
                _id: '1',
                name: 'Curso 2-1'
            }, {
                _id: '2',
                name: 'Curso 2-2'
            }, {
                _id: '3',
                name: 'Curso 2-3'
            }, {
                _id: '4',
                name: 'Curso 2-4'
            }],
            '11': [{
                _id: '1',
                name: 'Curso 2-11'
            }, {
                _id: '2',
                name: 'Curso 2-12'
            }, {
                _id: '3',
                name: 'Curso 2-13'
            }, {
                _id: '4',
                name: 'Curso 2-14'
            }]
        };

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
            }).
            catch (function(reason) {
                console.error(reason);
            });
            if (!$scope.$$phase) {
                $scope.$apply(); //this triggers a $digest
            }
        };
        $scope.programChanged = function(newProgram) {
            if (typeof newProgram === 'undefined') {
                $scope.courses = [];
                return;
            }
            Programs.load_courses(newProgram).then(function (data) {
                $scope.courses = data.courses;
            }).catch(function (reason) {
                console.error(reason);
            });                
            if (!$scope.$$phase) {
                $scope.$apply(); //this triggers a $digest
            }
        };

    }
])
//History Ctrl
.controller('PdoHistoryCtrl', function($scope) {})
//Basic Ctrl
.controller('PdoBasicCtrl', function($scope) {});