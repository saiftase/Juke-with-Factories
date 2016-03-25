'use strict';

var juke = angular.module('juke', []);

juke.filter('secondsToDuration', function($filter) {
    return function(seconds) {
        return $filter('date')(new Date(0, 0, 0).setSeconds(seconds), 'mm:ss');
    };
});
