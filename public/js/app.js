var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('BaseUrl', 'http://mytop5.rocks/');
app.constant('BaseServiceUrl', 'http://localhost:3000/');

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/borge.html'
    });

    $routeProvider.when('/nav/:nav_title*', {
        templateUrl: function(nav){
            console.log(nav);
            return 'templates/' + nav.nav_title + '.html';

        }
    });

    //$routeProvider.when('/showChart/:title', {
    //    templateUrl: 'templates/showChart.html',
    //    controller: 'ChartController'
    //});
    //
    //$routeProvider.when('/showCat/:id', {
    //    templateUrl: 'templates/showCat.html',
    //    controller: 'CategoriesController'
    //});
    //
    //$routeProvider.when('/createOptions', {
    //    templateUrl: 'templates/createOptions.html'
    //});
    //
    //$routeProvider.when('/editRank/:chart_id/:rank/:chartTitle', {
    //    templateUrl: 'templates/editRank.html',
    //    controller: 'EditRankController'
    //});

    $routeProvider.otherwise(
        { redirectTo: '/404.html' }
    );

});