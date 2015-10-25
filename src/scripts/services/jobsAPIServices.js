(function() {
    'use strict';

    angular
        .module('app')
        .factory('jobsAPI', JobsAPI);

    JobsAPI.$inject = ['$firebaseArray', '$http'];

    function JobsAPI($firebaseArray, $http) {
        var ref = new Firebase('https://frontjobs.firebaseio.com/');

        return $firebaseArray(ref);
    }

})();
