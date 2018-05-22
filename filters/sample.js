var module = angular.module('myApp',[]); // used to configure injector


module.controller('myCtrl',function($scope){
    
    $scope.names = ['hemant','rahul','manoj','dinesh'];
});

