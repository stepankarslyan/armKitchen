angular.module("MyApp", ['ngRoute'])

.config(function($routeProvider) {
    
    $routeProvider.
      when('/list', {
        templateUrl: 'html/list.html',
        controller: 'ListCtrl'
      }).
      when('/details', {
        templateUrl: 'html/details.html',
        controller: 'DetailCtrl'
      }).
      otherwise({
        redirectTo: '/details'
      });
  });