angular.module('app').directive('uiLoading', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/loading.html',
		controller: controller
	}

	function controller ($scope, $element, $attrs) {
  		
    }
});
