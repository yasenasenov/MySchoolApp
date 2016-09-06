app.controller('MainController',function($scope, GetMenuService){
    GetMenuService.getMenu(function(data){
        $scope.navs = data[0].value.navs;
    })
});
