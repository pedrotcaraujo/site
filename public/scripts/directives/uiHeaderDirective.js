angular.module('app').directive('uiHeader', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/header.html',
		controller: controller
	}

	function controller ($location, $rootScope, $scope, $element, $attrs) {
  		$scope.$on("$routeChangeSuccess", function (event, current) {
	        if(current && current.$$route.originalPath === "/") {
				$scope.isInnerJob = false;
        	}
        	else {
				$scope.isInnerJob = true;
        	}
	    });
    }
});
