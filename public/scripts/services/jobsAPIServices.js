angular.module("app").factory('jobsAPI', function($firebaseArray){
	var ref = new Firebase("https://frontjobs.firebaseio.com");

	return $firebaseArray(ref);
	
});
