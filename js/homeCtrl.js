//home page controller
bookApp.controller('homepageCtrl', ['$scope', '$rootScope', '$http', '$location','$filter', '$modal','jsonDataFetchService', function ($scope, $rootScope, $http, $location,$filter,$modal, jsonDataFetchService) {
    // $scope.myData=  $rootScope.loguname;
    $scope.checkItem="";
    var showToTeacher = angular.element( document.querySelector( '#teacherRole' ) );
    loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];

    for (var i = 0; i <= loggedUserDetails.length; i++) {
        if (loggedUserDetails[i].loggedInStatus == true) {
            $scope.myData = loggedUserDetails[i].username;
            break;
        }
    }
   
    //JSON DATAFETCH SERVICE
    jsonDataFetchService.getproductName().then(function (data) {
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
   $scope.showPopUp=function(){
    $location.path('/addBook');
   }

    //  $scope.showpopUp=function(){
    //     $scope.checkItem = "yes";
    //     $modal.open({
    //         templateUrl: 'partial/modal.html',
    //         controller: 'modalController',
    //         scope: $scope
    //     })
    //     .result.then(function() {
    //         alert('closed');
    //     }, function() {
    //         alert('canceled');
    //     });
    //  };

}]);
//page refreshing controller
bookApp.controller('refreshCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];

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
        if (loggedUserDetails[i].loggedInStatus == true) {
            if($location.path=== '/addBook'){
                $location.path('/addBook');
                break;
            }
            else{
            $location.path('/homePage');
            $scope.myData = loggedUserDetails[i].username;

            break;
            }
        }

    }
}]);

bookApp.controller('bookImageCtrl',['$scope','$rootScope','$location',function($scope,$rootScope,$location){
    var bookList= angular.element(document.getElementsByClassName("img-responsive"));
    
    console.log(bookList);
}]);



