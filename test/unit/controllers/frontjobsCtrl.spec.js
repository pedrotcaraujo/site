describe('frontJobsCtrl', function() {
    'use strict';

    var $rootScope,
        ctrl, scope, location, jobsAPIMock;

    beforeEach(module('app'));

    beforeEach(inject(function(_$rootScope_, _$controller_,  _$location_) {

        jobsAPIMock = {
            $add: function() {}
        }

        $rootScope = _$rootScope_;

        scope = $rootScope.$new();
        location = _$location_;

        ctrl = _$controller_('frontJobsCtrl', {
            $scope: scope,
            $location: location,
            jobsAPI: jobsAPIMock
        });

        spyOn(location, 'path').and.callThrough();
        spyOn(jobsAPIMock, '$add').and.callThrough();
    }));

    describe('when add a new job', function() {
        it('invokes $add method of jobsAPI', function() {
            scope.addNewJob();
            scope.$apply();
            expect(jobsAPIMock.$add).toHaveBeenCalled();
        });
        it('invokes path', function() {
            scope.addNewJob();
            scope.$apply();
            expect(location.path).toHaveBeenCalledWith('/');
        });
    });

});
