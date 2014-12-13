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
.controller('PdoReportCtrl', function($scope) {
    $scope.school = {};
    $scope.schools = [{
        _id: '1',
        schoolname: 'a'
    }, {
        _id: '2',
        schoolname: 'b'
    }, {
        _id: '3',
        schoolname: 'c'
    }, {
        _id: '4',
        schoolname: 'd'
    }, {
        _id: '5',
        schoolname: 'e'
    }, {
        _id: '6',
        schoolname: 'f'
    }];
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

    $scope.schoolChanged = function(newSchool) {
        //Actualizo el model de las asignaturas
        if (typeof $scope.programs_bkp[newSchool._id] !== 'undefined') {
            $scope.programs = $scope.programs_bkp[newSchool._id];
            console.log($scope.programs);
        } else {
            console.error('No existe');
            $scope.programs = [];
        }    
        if (!$scope.$$phase) {
            $scope.$apply(); //this triggers a $digest
        }
    };
    $scope.programChanged = function(newProgram) {
        if (typeof newProgram === 'undefined') {
            $scope.courses = [];
            return;
        }
        if (typeof $scope.courses_bkp[newProgram._id] !== 'undefined') {
            $scope.courses = $scope.courses_bkp[newProgram._id];
            console.log($scope.courses);
        } else {
            console.error('No existen clases');
            $scope.courses = [];
        }    
        if (!$scope.$$phase) {
            $scope.$apply(); //this triggers a $digest
        }
    };

})
//History Ctrl
.controller('PdoHistoryCtrl', function($scope) {})
//Basic Ctrl
.controller('PdoBasicCtrl', function($scope) {});