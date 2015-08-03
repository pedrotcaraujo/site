angular.module("app").controller('showJobsCtrl', function($scope, jobsAPI, $routeParams){
  
  var key = $routeParams.key;
  
  $scope.job = jobsAPI.$getRecord(key);

});
