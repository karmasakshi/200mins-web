'use strict';

angular.module('200mins-web').config(['$compileProvider', '$mdThemingProvider', '$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', function ($compileProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider, localStorageServiceProvider) {

        $compileProvider.debugInfoEnabled(false);

        $mdThemingProvider.theme('default')
                .primaryPalette('pink')
                .accentPalette('indigo');

        $urlRouterProvider.otherwise('/');

        localStorageServiceProvider.setPrefix('200mins');

        $stateProvider

                .state('filters', {
                    controller: 'FiltersCtrl',
                    templateUrl: 'modules/filters/filters.html',
                    url: '/filters'
                })

                .state('home', {
                    controller: 'HomeCtrl',
                    templateUrl: 'modules/home/home.html',
                    url: '/'
                })

                .state('movie', {
                    controller: 'MovieCtrl',
                    templateUrl: 'modules/movie/movie.html',
                    url: '/movie/:id'
                })

                .state('movies', {
                    controller: 'MoviesCtrl',
                    templateUrl: 'modules/movies/movies.html',
                    url: '/movies'
                })

                .state('user', {
                    controller: 'UserCtrl',
                    templateUrl: 'modules/user/user.html',
                    url: '/user/:username'
                })

                .state('user.activity', {
                    controller: 'ActivityCtrl',
                    templateUrl: 'modules/user/activity.html',
                    url: ''
                })

                .state('user.downloads', {
                    controller: 'DownloadsCtrl',
                    templateUrl: 'modules/user/downloads.html',
                    url: '/downloads'
                })

                .state('user.plays', {
                    controller: 'PlaysCtrl',
                    templateUrl: 'modules/user/plays.html',
                    url: '/plays'
                })

                .state('user.likes', {
                    controller: 'LikesCtrl',
                    templateUrl: 'modules/user/likes.html',
                    url: '/likes'
                })

                .state('user.watch-later', {
                    controller: 'WatchLaterCtrl',
                    templateUrl: 'modules/user/watch-later.html',
                    url: '/watch-later'
                })

                .state('user.watched', {
                    controller: 'WatchedCtrl',
                    templateUrl: 'modules/user/watched.html',
                    url: '/watched'
                });

    }]);