(function() {
    'use strict';

	angular
		.module('app')
		.factory('jobsAPI', JobsAPI);

		JobsAPI.$inject = ['$firebaseArray'];

		function JobsAPI($firebaseArray) {
			var ref = new Firebase('https://frontjobs.firebaseio.com/');

			return $firebaseArray(ref);
		}
		
})();
