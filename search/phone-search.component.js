/**
 * Created by X.P on 10/20/2017.
 */
angular.
module('phoneSearch').
component('phoneSearch',{
    templateUrl:'search/search.template.html',
    controller: ['$http',function PhoneController($http) {
        var self = this;
        self.orderProp = '-age';
        $http.get('jsonFiles/phones.json').then(function(response) {
            self.items = response.data;
        })
    }]
});