angular.module('app').directive('uiLoad', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/loading.html',
		controller: controller
	}

	function controller ($scope, $element, $attrs) {
  		$scope.$watch('loading', function (val) {
			if (val) {
				$scope.loading = true;
			}
			else {
				$scope.loading = false;
			}
		
		});

    }
});
