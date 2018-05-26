var app = angular.module('project', []);
app.controller('myCtrl', function($scope,$timeout) {
    $scope.title = "John"; // bind value to variable and 
    $timeout(function(){$scope.title = 'Manoj';},3000); // It automatically changes value of title after 3 secs.
});