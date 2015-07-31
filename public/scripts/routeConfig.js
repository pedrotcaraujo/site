angular.module("app").config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/list-jobs.html",
			controller: "listJobsCtrl",
			resolve: {
				jobs: function (jobsAPI) {
					return jobsAPI.$loaded();
				}
			}
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
