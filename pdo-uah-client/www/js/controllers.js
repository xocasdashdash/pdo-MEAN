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
.controller('PdoReportCtrl', ['Schools', 'Programs', '$scope',
    function(Schools, Programs, $scope) {
        $scope.schools = [];
        $scope.courses = [];
        $scope.programs = [];        

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
        $scope.courseChanged = function (newCourse) {
            console.log(newCourse);
        }

    }
])
//History Ctrl
.controller('PdoHistoryCtrl', function($scope) {})
//Basic Ctrl
.controller('PdoBasicCtrl', function($scope) {});