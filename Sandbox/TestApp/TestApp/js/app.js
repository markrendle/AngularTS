var HomeController = (function () {
    function HomeController($scope, $http) {
        $scope.title = "AngularTS";
        $http.get("data/people.js").success(function (data) {
            $scope.people = data;
        });
    }
    HomeController.$inject = [
        "$scope", 
        "$http"
    ];
    return HomeController;
})();
