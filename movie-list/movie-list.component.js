'use strict';

angular.
    module('movieList').
    component('movieList',{
        templateUrl: 'movie-list/movie-list.template.html',
        controller: ['$http','$routeParams',
            function PhoneDetailController($http,$routeParams) {
                /*this.movieId = $routeParams.movieId;*/
                var self = this;
                $http.get('jsonFiles/movie/'+ $routeParams.movieId+'.json').then(function(response) {
                    self.movie = response.data;
                })
            }
        ]
});