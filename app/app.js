'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'AdalAngular',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).

config(['$locationProvider', '$routeProvider', '$httpProvider','adalAuthenticationServiceProvider', function($locationProvider, $routeProvider, $httpProvider, adalProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  adalProvider.init(
   {
       instance: 'https://login.microsoftonline.com/',
       tenant: 'microsoft.onmicrosoft.com',
       clientId: '9dd0f119-edd8-4584-8981-820f67b47ea7',
       //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
   },
   $httpProvider
 );

  Logging = {
      level: 3,
      log: function (message) {
          console.log(message);
      }
  };
 
}]);
