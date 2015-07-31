angular.module("app").config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/list-jobs.html",
			controller: "listJobsCtrl"
		})
		.when("/newjob", {
			templateUrl: "views/add-jobs.html",
			controller: "frontJobsCtrl"
		})
		.when("/innerjob/:key", {
			templateUrl: "views/inner-job.html"
		})
		.otherwise({redirectTo: "/"});
});
