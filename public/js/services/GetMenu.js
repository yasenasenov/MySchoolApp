app.factory('GetMenu',function($http, BaseServiceUrl){
    var getMenu = function(success){
        $http.get( BaseServiceUrl + 'navs').success(function(data){
            success(data);
        })
    };

    return{getMenu:getMenu}
});