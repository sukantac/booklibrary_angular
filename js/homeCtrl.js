//home page controller
bookApp.controller('homepageCtrl', ['$scope', '$rootScope', '$http', '$location', '$filter', '$modal', 'jsonDataFetchService', 'pageRefreshControllingService', function ($scope, $rootScope, $http, $location, $filter, $modal, jsonDataFetchService, pageRefreshControllingService) {
    // $scope.myData=  $rootScope.loguname;
    $scope.checkItem = "";
    var showToTeacher = angular.element(document.querySelector('#teacherRole'));
    loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];

    for (var i = 0; i <= loggedUserDetails.length; i++) {
        if (loggedUserDetails[i].loggedInStatus == true) {
            $scope.myData = loggedUserDetails[i].username;
            break;
        }
    }

    //JSON DATAFETCH SERVICE
    jsonDataFetchService.getproductName('js/bookCollection.json').then(function (data) {
        $rootScope.bookName = data;
        console.log($rootScope.bookName);
    });
    //LOGOUT FUNCTION
    $scope.logOut = function () {

        loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];

        for (var i = 0; i < loggedUserDetails.length; i++) {

            if (loggedUserDetails[i].loggedInStatus == true) {
                loggedUserDetails[i].loggedInStatus = false;
                loggedUserDetails.splice(i, 1);
                localStorage.setItem('loggedUserArray', JSON.stringify(loggedUserDetails));
                //localStorage.removeItem(loggedUserArray);
                $location.path('/');
            }
        }

    }
    //OPENING MODAL TO ADD BOOK
    $scope.showPopUp = function () {
        $location.path('/addBook');
        $scope.currentstatus = "addbook";
        pageRefreshControllingService.setStatus($scope.currentstatus);
    }
    $rootScope.Currentstatus = pageRefreshControllingService.getStatus();

    console.log($rootScope.Currentstatus);
//OPEN THE GALLERY
$scope.openGallery=function(){
    alert("welcome to gallery");
    $location.path('/gallery');
    $scope.currentstatus = "gallery";
    pageRefreshControllingService.setStatus($scope.currentstatus);
  }

}]);
//page refreshing controller
bookApp.controller('refreshCtrl', ['$scope', '$rootScope', '$location', 'pageRefreshControllingService', function ($scope, $rootScope, $location, pageRefreshControllingService) {
    loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];
    var pageStatus = JSON.parse(localStorage.getItem('pagestatus'));

    for (var i = 0; i <= loggedUserDetails.length; i++) {
        if (loggedUserDetails.length == 0) {
            $location.path('/');
            break;
        }
        if (loggedUserDetails[i].loggedInStatus == false) {
            // $scope.myData=loggedUserDetails[i].username;
            $location.path('/');
            break;
        }
        if (loggedUserDetails[i].loggedInStatus == true && pageStatus === "homepage") {
            $location.path('/homePage');
            $scope.myData = loggedUserDetails[i].username;

            break;
        }
        if (loggedUserDetails[i].loggedInStatus == true && pageStatus === "addbook") {
            $location.path('/addBook');
            break;
        }

        if (loggedUserDetails[i].loggedInStatus == true && pageStatus === "gallery") {
            $location.path('/gallery');
            break;
        }

    }
}]);

bookApp.controller('bookImageCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    var bookList = angular.element(document.getElementsByClassName("img-responsive"));

    console.log(bookList);
}]);



