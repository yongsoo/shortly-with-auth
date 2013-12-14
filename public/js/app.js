angular.module('ShortlyApp', [
  'ngRoute'
])

.config(function($routeProvider){

  $routeProvider
    .when('/links', {
      controller: 'MainController',
      templateUrl: '/templates/links.html'
    })
    .when('/shorten', {
      controller: 'ShortenController',
      templateUrl: '/templates/shorten.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});