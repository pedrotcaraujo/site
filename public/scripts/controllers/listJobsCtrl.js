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

    
    // console.log(jobsAPI);

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
