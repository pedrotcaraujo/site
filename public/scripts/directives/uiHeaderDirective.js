angular.module('app').directive('uiHeader', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/header.html',
		controller: controller
	}

	function controller ($location, $scope, $element, $attrs) {
		$scope.isInnerJob = false;
		if($location.path === "/new" || $location.path === "/show") {
			$scope.isInnerJob = true;
        }
	}
});
