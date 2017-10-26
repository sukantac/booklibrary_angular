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
      .when('/home',{
        templateUrl:"partial/home.html",
      })
      .when('/addBook',{
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
    
    // console.log(JSON.stringify(record));
  }

  //DETECTING TAB CLOSE ON BROWSER
  window.onbeforeunload = function () {
    // return "Do you really want to close?";
    alert("do u want to close");
};

angular.element(document).ready(function () {
  var bookList= angular.element(document.getElementsByClassName("img-responsive"));
  
  // console.log(bookList);
//alert("page is loaded");  
  });


