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
            require: 'ngModel',
            link: function postLink($scope, element, attrs, ngModelCtrl) {
                var fnChangeCallback;
                $scope.$watch('modelo', function(value) {
                    if (typeof $scope.modelo !== 'undefined') {
                        if ($scope.modelo.length === 0) {
                            $scope.selectedElement = null;
                        }
                        $scope.callback({
                            selectedElement: $scope.selectedElement
                        });
                    }
                });
                if (attrs.callback) {
                    fnChangeCallback = function(evt) {
                        ngModelCtrl.$setViewValue($scope.selectedElement);
                        $scope.callback({
                            selectedElement: $scope.selectedElement
                        });
                        $scope.$apply();
                    };

                } else {
                    fnChangeCallback = function(evt) {
                        ngModelCtrl.$setViewValue($scope.selectedElement);
                        $scope.$apply();
                    };
                }
                element.on('change', fnChangeCallback);
                $scope.valueToShow = attrs.valueToShow || 'name';
            }
        };
    }).directive('numbersOnly', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                var regexNumero = /[^0-9+.]/g;
                modelCtrl.$parsers.push(function(inputValue) {
                    // this next if is necessary for when using ng-required on your input. 
                    // In such cases, when a letter is typed first, this parser will be called
                    // again, and the 2nd time, the value will be undefined
                    if (inputValue === undefined) {
                        return '';
                    }
                    var transformedInput = inputValue.replace(regexNumero, '');
                    if (transformedInput !== inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    });