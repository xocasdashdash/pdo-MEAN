/* global angular, cordova, StatusBar */
'use strict';
// PDO UAH App
angular.module('pdo-uah', ['ionic', 'pdouah.config','ngResource','pdouah.services','pdouah.controllers','pdouah.directives'])


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('pdo', {
                url: '/pdo',
                abstract: true,
                templateUrl: 'templates/pdo.html',
                controller: 'PdoBasicCtrl'
            })
            .state('pdo.main', {
                url: '/main',
                templateUrl: 'templates/pdo-main.html',
                controller: 'PdoMainCtrl'
            })
            .state('pdo.report', {
                url: '/report',
                templateUrl: 'templates/pdo-report.html',
                controller: 'PdoReportCtrl'
            })
            .state('pdo.history', {
                url: '/history',
                templateUrl: 'templates/pdo-history.html',
                controller: 'PdoHistoryCtrl'
            });
        $urlRouterProvider.otherwise('/pdo/main');
    }
]).run( ['$state','$ionicPlatform','configService',function($state, $ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default 
        //(remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

}]);