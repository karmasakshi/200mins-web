'use strict';

angular.module('200mins-web').controller('WatchLaterCtrl', ['$scope', 'userService', 'utilityService', function ($scope, userService, utilityService) {

        /* --- MODELS --- */

        // $scope.activities
        // $scope.username

        /* --- FUNCTIONS --- */

        $scope.initialize = function () {

            $scope.activities = [];

            $scope.updateActiveTab();

            $scope.getWatchLater();

        };

        $scope.getWatchLater = function () {

            userService.getMovieMarkWatchLater($scope.user.username).then(function (response) {

                if (typeof response === 'undefined') {

                    utilityService.notify('Service is down.');

                } else {

                    switch (response.status) {

                        case 200:

                            $scope.activities = response.data;

                            break;

                        default:

                            utilityService.notify('Service is down.');

                    }

                }

            });

        };

        /* --- RUN --- */

        $scope.initialize();

    }]);