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
