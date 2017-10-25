/**
 * Created by X.P on 10/20/2017.
 */
angular.
    module('movieSearch').
    component('movieSearch',{
        templateUrl:'search/search.template.html',
        controller: ['$http',function MovieController($http) {
            var self = this;
            self.orderProp = '-age';
            $http.get('jsonFiles/movies.json').then(function(response) {
                self.items = response.data;
            })
        }]
});