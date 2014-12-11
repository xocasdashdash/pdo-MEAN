'use strict';
angular.module('pdouah.controllers', [])
//Main controller
.controller('PdoMainCtrl', function($scope, $state) {

    $scope.goToReport= function () {
    	$state.go('pdo.report');
    };
    $scope.goToHistory= function () {
    	$state.go('pdo.history');
    };    
})
//PDO Report Ctrl
.controller('PdoReportCtrl', function($scope) {
    console.log('llamada!');
    $scope.pdo = {};

})
//History Ctrl
.controller('PdoHistoryCtrl', function($scope) {
    console.log('llamada!');

})
//Basic Ctrl
.controller('PdoBasicCtrl', function($scope) {
    console.log('llamada!');
});