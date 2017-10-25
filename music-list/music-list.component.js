/**
 * Created by X.P on 10/20/2017.
 */
angular.
    module('musicList').
    component('musicList',{
        templateUrl:"music-list/music-list.template.html",
        controller:["$http","$routeParams",
            function MusicDetailController($http,$routeParams) {
                var self = this;
                $http.get("jsonFiles/music/"+$routeParams.musicId+".json").then(function(response) {
                    self.music = response.data;
                })
        }]
});