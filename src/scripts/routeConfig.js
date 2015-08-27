(function() {
  'use strict';

angular
	.module('app')
	.config(Config);

	Config.$inject = ['$routeProvider'];

	function Config($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/jobs/index.html',
				controller: 'listJobsCtrl'
			})
			.when('/new', {
				templateUrl: 'views/jobs/new.html',
				controller: 'frontJobsCtrl'
			})
			.when('/show/:key', {
				templateUrl: 'views/jobs/show.html',
				controller: 'showJobsCtrl'
			})
			.otherwise({redirectTo: '/'});
	}

})();
