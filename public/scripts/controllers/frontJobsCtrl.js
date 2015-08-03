angular.module("app").controller('frontJobsCtrl', function($scope, jobsAPI, $location){

  $scope.addNewJob = function() {
    jobsAPI.$add({
      company: $scope.company,
      website: $scope.website,
      titleJob: $scope.titleJob,
      country: $scope.country,
      email: $scope.email,
      hability: $scope.hability,
      description: $scope.description,
      timestamp: Firebase.ServerValue.TIMESTAMP
    });
    $location.path("/");
  };

  // $scope.jobModality = [
  //   {modality: "Presencial"},
  //   {modality: "Remoto"},
  //   {modality: "Freelancer"},
  //   {modality: "Trainee"}
  // ];
  // $scope.jobSalary = [
  //   {salary: "N/A"},
  //   {salary: "Abaixo de R$3.000"},
  //   {salary: "R$3.000 - R$6.000"},
  //   {salary: "R$6.000 - R$9.000"},
  //   {salary: "Acima de R$9.000"},
  //   {salary: "Valor hora a combinar"}
  // ];

});
