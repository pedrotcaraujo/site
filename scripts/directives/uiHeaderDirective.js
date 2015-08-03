angular.module('app').directive('uiHeader', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/header.html',
		controller: controller
	}

	function controller ($location, $rootScope, $scope, $element, $attrs) {
		$scope.isInnerJob = true;

  		$scope.$on("$routeChangeSuccess", function (event, current) {
	        if(current.$$route.originalPath === "/") {
				$scope.isInnerJob = false;
        	}
	    });
    }
});
