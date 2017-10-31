var bookApp = angular.module('bookApp', ['ngRoute','ui.bootstrap']);
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
      .when('/homePage',{
        resolve:{
          check: function($location, $rootScope){
            for (var i = 0; i <= loggedUserDetails.length; i++) {
              if (loggedUserDetails.length == 0) {
                  $location.path('/login');
                  break;
              }
            }
          }
   },
        templateUrl:"partial/home.html",
      })
      .when('/addBook',{
           resolve:{
                  check: function($location, $rootScope){
                    for (var i = 0; i <= loggedUserDetails.length; i++) {
                      if (loggedUserDetails.length == 0) {
                          $location.path('/login');
                          break;
                      }
                    }
                  }
           },
        templateUrl:"partial/modal.html",
      })
     
      
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
    
  }

  //DECLARING BOOKCONTAINER ARRAY
  bookRecord = [];
  

