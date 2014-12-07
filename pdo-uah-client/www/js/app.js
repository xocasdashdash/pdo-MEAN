/* global angular, cordova, StatusBar */
'use strict';
// PDO UAH App
angular.module('pdo-uah', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
    .config(function($stateProvider, $urlRouteProvider) {
        $stateProvider
            .state('pdo', {
                url: '/pdo',
                abstract: true,
                template: 'templates/pdo.html'
            })
            .state('pdo.main', {
                url: '/pdo/main',
                views: {
                    'pdo-main': {
                        templateUrl: 'templates/pdo-main.html',
                        controller: 'PdoMain'
                    }
                }
            })
            .state('pdo.report', {
                url: '/pdo/report',
                views: {
                    'pdo-report': {
                        templateUrl: 'templates/pdo-report.html',
                        controller: 'PdoReport'
                    }
                }
            })
            .state('pdo.history', {
                url: '/pdo/history',
                views: {
                    'pdo-history': {
                        templateUrl: 'templates/pdo-history.html',
                        controller: 'PdoHistory'
                    }
                }
            });
        $urlRouterProvider.otherwise('/pdo/main');
    });