var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
    $scope.hideElement = false;

        $timeout(function() {
        console.log("hidden");
        $scope.hideElement = true;
    }, 2000);
});
