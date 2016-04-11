angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {

        $scope.loggedIn = false;

        $scope.signIn = function () {
            // Log in using Appstax API
        };

    })

    .controller('UsersCtrl', function ($scope, Users) {

        $scope.users = Users.all();
        $scope.remove = function (user) {
            Users.remove(user);
        };
    })

    .controller('UserDetailCtrl', function ($scope, $stateParams, Users) {
        $scope.user = Users.get($stateParams.userId);
    });
