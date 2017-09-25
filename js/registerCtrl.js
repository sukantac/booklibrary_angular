bookApp.controller('registerCtrl', ['$scope', '$rootScope','$location', function($scope, $rootScope,$location) {
    
    $scope.storeRecord=function(){
        //object creation for user
        var userDetailsObj={
            username:"",
            pass:"",
            mobNO:"",
            address:""
        };
        var reguserName=$scope.regusername;
        var regpswd=$scope.regpassword;
        var regmobnum=$scope.regmobile;
        var regaddress=$scope.regaddress;
        userDetailsObj.username=reguserName;
        userDetailsObj.pass=regpswd;
        userDetailsObj.mobNO=regmobnum;
        userDetailsObj.address=regaddress;
        //pushing the object into array
        userCredential.push(userDetailsObj);
      
        //saving the data in local storage
        localStorage.setItem('credentialArray',JSON.stringify(userCredential));
        console.log("data storage done in local");
        $location.path('/login');
        $scope.regusername="";
        $scope.regpassword="";
        $scope.regmobile="";
        $scope.regaddress="";
      
        
        

    }
    
}]);
