(function() {
	'use strict';

	angular
		.module('app')
		.controller('listJobsCtrl', ListJobs);

		ListJobs.$inject = ['$scope', 'jobsAPI'];

		function ListJobs($scope, jobsAPI){

		  $scope.loading = true;

		  jobsAPI.$loaded()
		    .then(function() {
		      $scope.jobs = jobsAPI;
		      $scope.loading = false;
		  })
		    .catch(function(error) {
		      console.log('Error:', error);
		  });
		}

})();
