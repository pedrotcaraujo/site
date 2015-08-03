angular.module("app").config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/jobs/index.html",
			controller: "listJobsCtrl"
		})
		.when("/new", {
			templateUrl: "views/jobs/add-jobs.html",
			controller: "frontJobsCtrl"
		})
		.when("/show/:key", {
			templateUrl: "views/jobs/show.html",
			controler: "listJobsCtrl"
		})
		.otherwise({redirectTo: "/"});
});
