let app = angular.module('hajoApp',[]);

app.controller('hajoController', ($scope, $http) => {
    $scope.renderHajok = []
    $scope.helyekHonnan = [];
    $scope.helyekHova = [];

    $http.get('../json/hajok.json')
    .then((response) => {
        $scope.renderHajok = response.data;
        console.log($scope.renderHajok)
    })
    .then(() => {
        for (const e of $scope.renderHajok) {
            if (!$scope.helyekHonnan.includes(e.honnan)) {
                $scope.helyekHonnan.push(e.honnan);
            }
            if (!$scope.helyekHova.includes(e.hova)) {
                $scope.helyekHova.push(e.hova);
            }
        }

        $scope.helyekHonnan.sort();
        $scope.helyekHova.sort();
    })
    

    $scope.filterByTime = function (item) {
        if (!$scope.ut_ido) {
            return true; // Show all results if no time input
        }

        const userTime = new Date($scope.ut_ido);
        const indulTime = new Date(item.indul);

        return userTime < indulTime;
    };


})