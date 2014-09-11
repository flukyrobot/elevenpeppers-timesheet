'use strict';

// Declare app level module which depends on views, and components
angular.module('timesheet', [
  'ngRoute',
  'timesheet.view1',
  'timesheet.view2',
  'timesheet.weekly',
  'timesheet.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
