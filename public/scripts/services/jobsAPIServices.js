angular.module("app").factory('jobsAPI', function($http){
	var _getJobs = function () {
		var data = new Firebase("https://frontjobs.firebaseio.com/jobs");
  			// $scope.jobs = $firebaseObject(ref);

		return $http.get(data);
	}

	return {
		getJobs: _getJobs
	};
});
