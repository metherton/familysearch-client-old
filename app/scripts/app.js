'use strict';

/**
 * @ngdoc overview
 * @name familysearchClientApp
 * @description
 * # familysearchClientApp
 *
 * Main module of the application.
 */
angular
  .module('familysearchClientApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
