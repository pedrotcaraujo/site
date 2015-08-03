angular.module("app").factory('jobsAPI', function($firebaseArray){
	// var randomRoomId = Math.round(Math.random() * 100000000);
	var ref = new Firebase("https://frontjobs.firebaseio.com/");

	return $firebaseArray(ref);
	
});
