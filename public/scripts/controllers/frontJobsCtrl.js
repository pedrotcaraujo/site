angular.module("app").controller('frontJobsCtrl', function($scope, jobsAPI, $location){

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
    $location.path("/");
  };

});
