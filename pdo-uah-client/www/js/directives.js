'use strict';
angular.module('pdouah.directives', [])
    .directive('school', function() {
        return {
            templateUrl: 'templates/directives/school.tpl.html',
            restrict: 'E',
            controller: function($scope) {
            	//Insertar llamada a servicio que pilla las escuelas
                $scope.schools = [{
                    id: '1',
                    nombre: 'a'
                }, {
                    id: '2',
                    nombre: 'b'
                }, {
                    id: '3',
                    nombre: 'c'
                }, {
                    id: '4',
                    nombre: 'd'
                }, {
                    id: '5',
                    nombre: 'e'
                }, {
                    id: '6',
                    nombre: 'f'
                }];
                $scope.prueba = 'hola';
                $scope.colors = [{
                    name: 'black',
                    shade: 'dark'
                }, {
                    name: 'white',
                    shade: 'light'
                }, {
                    name: 'red',
                    shade: 'dark'
                }, {
                    name: 'blue',
                    shade: 'dark'
                }, {
                    name: 'yellow',
                    shade: 'light'
                }];
            },
            link: function postLink(scope) {
                console.log('llamada!!!');
            }
        };
    });