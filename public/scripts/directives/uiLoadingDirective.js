(function() {
  'use strict';

	angular
		.module('app')
		.directive('uiLoad', UiLoad);

		UiLoad.$inject = ['$scope', '$element', '$attrs'];

		function UiLoad() {

			return {
				restrict: 'A',
				templateUrl: 'views/loading.html',
				controller: controller,
				link: function (scope, element, attrs) {
		  	$scope.$watch('UiLoad', function (val) {
					if (val) {
						$scope.loading = true;
					}
					else {
						$scope.loading = false;
					}
				});
		  }
			}

		};

})();
