'use strict';
var App = angular.module('GameApp', ['ngRoute']);

/*Configuration of Routing*/
App.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html'
  }).when('/gameon', {
    templateUrl: 'views/game.html'
  }).otherwise({redirectTo: '/home'});
}]);

App.run(['$location', function($location){
  $location.path('#/home');
}]);

