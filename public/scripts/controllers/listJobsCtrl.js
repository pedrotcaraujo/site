angular.module("app").controller('listJobsCtrl', function($scope, jobsAPI){

  $scope.loading = true;

  jobsAPI.$loaded()
    .then(function() {
      $scope.jobs = jobsAPI;
      $scope.loading = false;
  })
    .catch(function(error) {
      console.log("Error:", error);
  });

});
