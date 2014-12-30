'use strict';
angular.module('pdouah.directives', [])
    .directive('prettySelect', function() {
        return {
            templateUrl: 'templates/directives/prettySelect.html',
            restrict: 'E',
            scope: {
                modelo: '=',
                labelToShow: '@',
                callback: '&'
            },
            link: function postLink($scope, element, attrs) {
                $scope.$watch('modelo', function(value) {
                    if (typeof $scope.modelo !== 'undefined') {
                        if($scope.modelo.length === 0){
                            $scope.selectedElement = null;
                        }
                        $scope.callback({
                            selectedElement: $scope.selectedElement
                        });
                    }
                });
                if (attrs.callback) {
                    element.on('change', function(evt) {
                        $scope.callback({
                            selectedElement: $scope.selectedElement
                        });
                    });
                }
                $scope.valueToShow = attrs.valueToShow || 'name';
            }
        };
    });