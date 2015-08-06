(function() {
	'use strict';

	angular
		.module("app")
		.controller('showJobsCtrl', ShowJobs);

		ShowJobs.$inject= ['$scope', 'jobsAPI', '$routeParams'];

			function ShowJobs($scope, jobsAPI, $routeParams){
		  
		  var key = $routeParams.key;
		  
		  $scope.job = jobsAPI.$getRecord(key);

		};
})();
