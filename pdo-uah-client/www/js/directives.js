'use strict';
angular.module('pdouah.directives', [])
    .directive('school', function() {
        return {
            //templateUrl: 'templates/directives/school.tpl.html',
            template: '<select ng-model="school" ' +
                ' ng-options="school as school.schoolname ' +
                ' for school in schools track by school._id"></select>',
            restrict: 'E',
            $scope: {
                schools: '=',
                schoolChanged: '&'
            },
            controller: function($scope) {},
            link: function postLink($scope, element, attrs) {
                //Insertar llamada a servicio que pilla las escuelas
                //Bind al change para que al haber un cambio
                // modifique la variable de planes de estudio
                element.on('change', function() {
                    $scope.schoolChanged(
                        $scope.school
                    );
                });
            }
        };
    })
    .directive('program', function() {
        return {
            template: '<select ng-model="program" ' +
                ' ng-options="program as program.name ' +
                ' for program in programs track by program._id">' +
                '</select>',
            $scope: {
                programs: '=',
                programChanged: '&'
            },
            restrict: 'E',
            link: function postLink($scope, element, attrs) {
                $scope.$watch('programs', function(value) {
                    if (typeof $scope.programs !== 'undefined') {
                        $scope.program = $scope.programs[0];
                        $scope.programChanged(
                            $scope.program
                        );
                    }
                });
                element.on('change', function() {
                    $scope.programChanged(
                        $scope.program
                    );
                });
            }
        }
    }).directive('course', function() {
        return {
            template: '<select ng-model="course" ' +
                ' ng-options="course as course.name ' +
                ' for course in courses track by course._id">' +
                '</select>',
            restrict: 'E',
            $scope: {
                courses: '='
            },
            link: function postLink($scope, element, attrs) {
                $scope.$watch('courses', function(value) {
                    if (typeof $scope.courses !== 'undefined') {
                        $scope.course = $scope.courses[0];
                    }
                });
            }
        };
    });