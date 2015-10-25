(function() {
    'use strict';

    angular
        .module('app')
        .controller('frontJobsCtrl', NewJob);

    NewJob.$inject = ['$scope', 'jobsAPI', '$location'];

    function NewJob($scope, jobsAPI, $location) {

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
                jobSalary: $scope.jobSalary,
                timestamp: Firebase.ServerValue.TIMESTAMP
            });
            $location.path('/');
        };

    }

})();
