const app = angular.module('hajoApp', []);

app.controller('hajoController', ($scope, $http) => {

    $http.get('./json/hajok.json').then((response) => {

        $scope.menetrend = response.data;
        $scope.locations = [...new Set(response.data.map(item => item.honnan).concat(response.data.map(item => item.hova)))];
        $scope.fromFilter = "";
        $scope.toFilter = "";

        // Default sort
        $scope.orderByField = 'erkezik';
        $scope.reverseSort = false;

    });

    $scope.sortBy = (field) => {
        $scope.reverseSort = ($scope.orderByField === field) ? !$scope.reverseSort : false;
        $scope.orderByField = field;
    }
    
})