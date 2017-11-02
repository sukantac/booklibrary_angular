
bookApp.controller('loginCtrl', ['$scope', '$rootScope', '$location', 'pageRefreshControllingService', function ($scope, $rootScope, $location, pageRefreshControllingService) {
    $rootScope.loggedUserDetails = [];
    $scope.Login = function () {
        $rootScope.loginobj = {
            username: "",
            password: "",
            // domainName:"",
            loggedInStatus: ""
        };

        $rootScope.loguname = $scope.logusername;
        $rootScope.logpwd = $scope.logpassword;

        userCredential = JSON.parse(localStorage.getItem('credentialArray')) ? JSON.parse(localStorage.getItem('credentialArray')) : [];
        for (var k = 0; k < userCredential.length; k++) {

            if (userCredential[k].username == $scope.logusername && userCredential[k].pass == $scope.logpassword) {
                $rootScope.loginobj.username = $scope.logusername;
                $rootScope.loginobj.password = $scope.logpwd;
                $rootScope.loginobj.loggedInStatus = true;
                var username = $rootScope.loginobj.username.substring($rootScope.loginobj.username.indexOf('\\') + 1, $rootScope.loginobj.username.length);
                $rootScope.loginobj.username = username;
                //         var domain =  $rootScope.loginobj.username.substring(0,  $rootScope.loginobj.username.indexOf('\\'));
                //         console.log(domain);
                loggedUserDetails.push($rootScope.loginobj);
                localStorage.setItem('loggedUserArray', JSON.stringify(loggedUserDetails));
                $location.path('/homePage');
                $scope.currentstatus = "homepage";
                pageRefreshControllingService.setStatus($scope.currentstatus);
                //$rootScope.Currentstatus=pageRefreshControllingService.getStatus();
                return 0;
            }

        }
        alert('wrong user_id or password');


        $scope.logusername = "";
        $scope.logpassword = "";
    }
    //ENABLING ENTER KEY TO LOGIN

    $("#pwd").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".btn").click();
        }
    });
    //ENABLING ENTER KEY TO LOGIN WITH ANGULAR DIRECTIVE
    // angular.element(document.querySelectorAll("#pwd")).ng-keyup(function (event) {
    //     if (event.keyCode === 13) {
    //         angular.element(document.querySelectorAll(".btn")).triggerHandler('click');
    //     }
    // });

    //REGISTRATION PART
    $scope.register = function () {
        $location.path('/register');
    }

}]);