'use strict';

angular.module('timesheet.version', [
  'timesheet.version.interpolate-filter',
  'timesheet.version.version-directive'
])

.value('version', '0.1');
