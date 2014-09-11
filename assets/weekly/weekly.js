'use strict';

angular.module('timesheet.weekly', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weekly/:year/:month/:day', {
    templateUrl: 'weekly/weekly.html',
    controller: 'WeeklyCtrl'
  });
}])

.controller('WeeklyCtrl', [function() {

}]);