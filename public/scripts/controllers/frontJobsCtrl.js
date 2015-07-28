angular.module("app").controller('frontJobsCtrl', function($scope, jobsAPI, $firebaseObject){
  
  // var ref = new Firebase("https://frontjobs.firebaseio.com/jobs");

  // $scope.jobs = $firebaseObject(ref);

  // $scope.jobs = [
  //   {company: "Google", website: "http://www.google.com", titleJob: "front end developer"},
  //   {company: "Google", website: "http://www.google.com", titleJob: "front end developer"},
  //   {company: "Google", website: "http://www.google.com", titleJob: "front end developer"}
  // ];
  $scope.jobModality = [
    {modality: "Presencial"},
    {modality: "Remoto"},
    {modality: "Freelancer"},
    {modality: "Trainee"}
  ];
  $scope.jobSalary = [
    {salary: "N/A"},
    {salary: "Abaixo de R$3.000"},
    {salary: "R$3.000 - R$6.000"},
    {salary: "R$6.000 - R$9.000"},
    {salary: "Acima de R$9.000"},
    {salary: "Valor hora a combinar"}
  ];
  $scope.addNewJob = function (job) {
    $scope.jobs.push(angular.copy(job));
    delete $scope.job;
  }

  var loadJobs = function () {
    jobsAPI.getJobs().success(function (data) {
      $scope.nJobs = $firebaseObject(data);
    });
  };

  loadJobs();
});
