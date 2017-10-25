/**
 * Created by X.P on 10/21/2017.
 */
angular.
    module('selfCarousel').
    component('selfCarousel',{
        templateUrl: 'carousel/carousel.template.html',
        controller: function CarouselDemoCtrl($scope) {
            $scope.myInterval = 2000;
            $scope.active = 0;
            /*var slides = $scope.slides = [];*/
            var currIndex = 0;

            $scope.slides = [{
                image: 'images-home/movie-carousel.jpg',
                id:0,
                name: 'movie'
            },{
                image: 'images-home/music-carousel.jpg',
                id:1,
                name: 'music'
            },{
                image: 'images-home/phone-carousel.jpg',
                id:2,
                name: 'phone'
            }];

        }
});