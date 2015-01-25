/* global angular, cordova, StatusBar */
'use strict';
// PDO UAH App
angular.module('pdo-uah', ['ionic', 'pdouah.config', 'pdouah.services',
    'pdouah.controllers', 'pdouah.directives', 'monospaced.elastic',
    'angular-jquery-maskedinput'
])


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
                controller: 'PdoMainCtrl',
                data:{
                    viewTitle: 'Elige tu pokémon!'
                }
            })
            .state('pdo.report', {
                url: '/report',
                templateUrl: 'templates/pdo-report.html',
                controller: 'PdoReportCtrl',
                data:{
                    viewTitle: 'Reportar!'
                }
            })
            .state('pdo.history', {
                url: '/history',
                templateUrl: 'templates/pdo-history.html',
                controller: 'PdoHistoryCtrl'                
            })
            .state('pdo.history.list',{
                url: '/list',
                templateUrl: 'templates/pdo-history-list.html',
                controller: 'PdoHistoryListCtrl',
                data:{
                    viewTitle: 'Listado de PDos'
                }
            }).state('pdo.history.detail',{
                url: '/:pdoId/detail',
                templateUrl: 'templates/pdo-history-detail.html',
                controller: 'PdoHistoryDetailCtrl',
                data:{
                    viewTitle: 'Detalle de PDo'
                }
            });
        $urlRouterProvider.otherwise('/pdo/main');
    }
]).run(['$state', '$ionicPlatform', 'configService',
    function($state, $ionicPlatform) {
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

    }
]);