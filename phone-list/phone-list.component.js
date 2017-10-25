/**
 * Created by X.P on 10/20/2017.
 */
angular.
    module('phoneList').
    component('phoneList',{
        templateUrl:"phone-list/phone-list.template.html",
        controller:['$http','$routeParams',
            function PhoneDetailController($http,$routeParams) {
            var self = this;
            $http.get('jsonFiles/phone/'+$routeParams.phoneId+'.json').then(function(response) {
                self.phone = response.data;
            })
        }]
});