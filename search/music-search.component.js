/**
 * Created by X.P on 10/20/2017.
 */
angular.
module('musicSearch').
component('musicSearch',{
    templateUrl:'search/search.template.html',
    controller: ['$http',function MusicController($http) {
        var self = this;
        self.orderProp = '-age';
        $http.get('jsonFiles/songs.json').then(function(response) {
            self.items = response.data;
        })
    }]
});