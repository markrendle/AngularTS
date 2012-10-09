/// <reference path="../../../../angular.d.ts" />

interface Person {
    name: string;
    occupation: string;
}
interface HomeScope extends Scope {
    title: string;
    people: Person[];
}

class HomeController {
    static $inject = ["$scope", "$http"];
    constructor ($scope: HomeScope, $http: HttpService) {
        $scope.title = "AngularTS";
        $http.get("data/people.js")
            .success((data) => {
                $scope.people = <Person[]>data;
            });
    }
}
