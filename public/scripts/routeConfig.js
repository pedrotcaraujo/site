angular.module("app").config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/list-jobs.html",
			controller: "frontJobsCtrl"
		})
		.when("/newjob", {
			templateUrl: "views/add-jobs.html",
			controller: "frontJobsCtrl"
		});
});
