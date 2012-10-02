var HomeController = (function () {
    function HomeController($scope) {
        this.initScope($scope);
    }
    HomeController.prototype.initScope = function (scope) {
        scope.title = "AngularTS";
    };
    return HomeController;
})();
