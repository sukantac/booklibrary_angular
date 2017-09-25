
bookApp.controller('loginCtrl', ['$scope', '$rootScope','$location', function($scope, $rootScope,$location) {
    $scope.Login=function(){
       $rootScope.loginobj={
        username:"",
        password:"",
        // domainName:"",
        loggedInStatus:""
        };
        $rootScope.loggedUserDetails=[];    
        
        $rootScope.loguname= $scope.logusername;
         $rootScope.logpwd= $scope.logpassword;
        userCredential = JSON.parse(localStorage.getItem('credentialArray')) ? JSON.parse(localStorage.getItem('credentialArray')) : [];
        for(var k=0;k<userCredential.length;k++){
            
                if (userCredential[k].username==$scope.logusername && userCredential[k].pass==$scope.logpassword){
                    $rootScope.loginobj.username=$scope.logusername;
                    $rootScope.loginobj.password=$scope.logpwd;
                    $rootScope.loginobj.loggedInStatus=true;
                  //  loggedUserDetails.push($rootScope.loginobj);
                    localStorage.setItem('loggedUserArray',JSON.stringify( $rootScope.loginobj));
                    $location.path('/home');
                    break;
                }
                  
               
                }
                
    
    //   loginobj.username=$scope.username;
    //   loginobj.password=$scope.password;
    
      
       
    //   if(loginobj.username==undefined || loginobj.password==undefined)
    //     {
    //         swal({
    //             title: 'oops',
    //             text: 'please enter user id \ password',
    //             type: 'warning'
    //          });
    //     }
    //   var domain = loginobj.username.substring(0, loginobj.username.indexOf('\\'));
    //    $rootScope.userName = loginobj.username.substring(loginobj.username.indexOf('\\') + 1, loginobj.username.length);
      
    //   if(domain=="stg")
    //     {
    //         $rootScope.isLoggedIn=true;  
    //         loginobj.username= $rootScope.userName;
    //         loginobj.domainName=domain;
    //         loginobj.loggedInStatus=$rootScope.isLoggedIn;
    //          userCredential.push(loginobj);
    //         localStorage.setItem('credentialArray',JSON.stringify(userCredential));
    //        $location.path('/home');
    //     //    console.log()
    //     }
    //     $scope.username="";
    //     $scope.password="";
    }
    //REGISTRATION PART
    $scope.register=function(){
        $location.path('/register');
    }

}]);