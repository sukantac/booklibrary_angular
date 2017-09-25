//home page controller
bookApp.controller('homepageCtrl',['$scope', '$rootScope','$http', '$location','jsonDataFetchService', function($scope, $rootScope, $http, $location, jsonDataFetchService){
   // $scope.myData=  $rootScope.loguname;
   loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];
   
    for(var i=0;i<=loggedUserDetails.length;i++){
        if(loggedUserDetails[i].loggedInStatus==true){
            $scope.myData=loggedUserDetails[i].username;
            break;
        }
    }
    //JSON DATAFETCH SERVICE
    jsonDataFetchService.getproductName().then(function(data) {
        $rootScope.bookName = data;
        console.log($rootScope.bookName);
      });
      //LOGOUT FUNCTION
      $scope.logOut=function(){
          
        loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];
        
        for(var i=0;i<loggedUserDetails.length;i++){
            
                if (loggedUserDetails[i].loggedInStatus==true){
                   loggedUserDetails[i].loggedInStatus=false;
                   localStorage.setItem('loggedUserArray',JSON.stringify(loggedUserDetails));
                   localStorage.removeItem(loggedUserDetails[i]);
                   $location.path('/');
                }
                }
              
      }
  }]);
  //page refreshing controller
  bookApp.controller('refreshCtrl',['$scope', '$rootScope', '$location', function($scope, $rootScope,$location){
    loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];
    
    for(var i=0;i<=loggedUserDetails.length;i++){
        if(loggedUserDetails.length==0){
            $location.path('/');
            break;
        }
        if (loggedUserDetails[i].loggedInStatus==false){
            // $scope.myData=loggedUserDetails[i].username;
             $location.path('/');
             break;
         }
            if (loggedUserDetails[i].loggedInStatus==true){
                $location.path('/home');
                $scope.myData=loggedUserDetails[i].username;
               
                break;
            }
           
            }
  }]);

  