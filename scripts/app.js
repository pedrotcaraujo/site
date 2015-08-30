angular.module('app', ['firebase', 'ngRoute']);

(function() {
  'use strict';

angular
	.module('app')
	.config('routeConfig', RouteConfig);

	RouteConfig.$inject = ['$routeProvider'];

	function RouteConfig($routeProvider) {
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

(function() {
  'use strict';

  angular
    .module('app')
    .controller('frontJobsCtrl', NewJob);

  NewJob.$inject = ['$scope', 'jobsAPI', '$location'];

  function NewJob($scope, jobsAPI, $location) {

    $scope.addNewJob = function() {
      jobsAPI.$add({
        company: $scope.company,
        website: $scope.website,
        titleJob: $scope.titleJob,
        country: $scope.country,
        jobModality: $scope.jobModality,
        email: $scope.email,
        hability: $scope.hability,
        description: $scope.description,
        jobSalary: $scope.typeSalary,
        timestamp: Firebase.ServerValue.TIMESTAMP
      });
      $location.path('/');
    };

  }

})();

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

(function() {
	'use strict';

	angular
		.module('app')
		.controller('showJobsCtrl', ShowJobs);

		ShowJobs.$inject= ['$scope', 'jobsAPI', '$routeParams'];

			function ShowJobs($scope, jobsAPI, $routeParams){
		  
		  var key = $routeParams.key;
		  
		  $scope.job = jobsAPI.$getRecord(key);

		}
})();

(function() {
    'use strict';

	angular
		.module('app')
		.directive('uiHeader', UiHeader);

		function UiHeader() {
			return {
				restrict: 'A',
				templateUrl: 'views/header.html',
				controller: controller
			};

			function controller ($location, $rootScope, $scope) {
		  		$scope.$on('$routeChangeSuccess', function (event, current) {
			      if(current && current.$$route.originalPath === '/') {
					  	$scope.isInnerJob = false;
		        }
		        else {
							$scope.isInnerJob = true;
		        }
			    });
		    }
		}

})();

(function() {
  'use strict';

	angular
		.module('app')
		.directive('uiLoad', UiLoad);

		function UiLoad() {

			return {
				restrict: 'A',
				templateUrl: 'views/loading.html',
				controller: controller
			};

			function controller($scope) {
		  	$scope.$watch('loading', function (val) {
					if (val) {
						$scope.loading = true;
					}
					else {
						$scope.loading = false;
					}
				});
		  }

		}

})();

(function() {
    'use strict';

	angular
		.module('app')
		.factory('jobsAPI', JobsAPI);

		JobsAPI.$inject = ['$firebaseArray'];

		function JobsAPI($firebaseArray) {
			var ref = new Firebase('https://frontjobs.firebaseio.com/');

			return $firebaseArray(ref);
		}
		
})();
