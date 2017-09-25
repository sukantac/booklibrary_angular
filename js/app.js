var bookApp = angular.module('bookApp', ['ngRoute']);
bookApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "partial/login.html",
      })
      .when('/login', {
        templateUrl: "partial/login.html",
      })
      .when('/register',{
        templateUrl:"partial/register.html",
      })
      .when('/home',{
        templateUrl:"partial/home.html",
      })
  
     
      // .when("/home", {
      //   resolve: {
      //     check: function($location, $rootScope) {
      //       // if (!$rootScope.isLoggedIn) {
      //       //   $location.path('/login')
      //       // }
      //       for(var i=0;i<userCredential.length;i++){
              
                  
      //               if(!userCredential[i].loggedInStatus){
                        
      //                 $location.path('/login');
      //                 break;
      //               }
      //             }
      //     }
      //   },
      //   templateUrl: "partial/home.html",
      // })
      
    $locationProvider.hashPrefix('');
  });

  // //STATE PROVIDER
  // bookApp.config(function($stateProvider) {
  //   $stateProvider
  //     .state('register', {
  //       url: '/register',
  //       templateUrl: 'partial/register.html'
  //     })
  
  // });
//DATA FETCH ON PAGE LOADING
  window.addEventListener('load', dataFetch);
  
  function dataFetch() {
    userCredential = JSON.parse(localStorage.getItem('credentialArray')) ? JSON.parse(localStorage.getItem('credentialArray')) : [];
    loggedUserDetails = JSON.parse(localStorage.getItem('loggedUserArray')) ? JSON.parse(localStorage.getItem('loggedUserArray')) : [];
    
    // console.log(JSON.stringify(record));
  }
  
