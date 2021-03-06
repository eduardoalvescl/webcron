'use strict';

/**
 * @ngdoc overview
 * @name webCronApp
 * @description
 * # webCronApp
 *
 * Main module of the application.
 */
angular
    .module('webCronApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngStomp',
        'ui.bootstrap',
        'ngTagsInput'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/loginPage', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/jobs', {
                templateUrl: 'views/jobs.html',
                controller: 'JobsCtrl',
                controllerAs: 'jobs'
            })
            .when('/running', {
                templateUrl: 'views/running.html',
                controller: 'RunningCtrl',
                controllerAs: 'running'
            })
            .when('/me', {
                templateUrl: 'views/me.html',
                controller: 'MeCtrl',
                controllerAs: 'me'
            })
            .otherwise({
                redirectTo: '/'
            });
    });