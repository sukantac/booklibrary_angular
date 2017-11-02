angular.module('myApp', [])
.controller('AlbumCtrl', function($scope) {
  $scope.images = [
    {category : 'High', image : 'http://lorempixel.com/g/850/400', description : 'Random Photo', stars : '4/5'},
    {category : 'Medium', image : 'http://lorempixel.com/g/850/400/sports', description : 'Sports Photo', stars : '3/5'},
    {category : 'Medium', image : 'http://lorempixel.com/g/850/400/animals', description : 'Animal Photo', stars : '3/5'},
    {category : 'High', image : 'http://lorempixel.com/g/850/400/abstract', description : 'Abstract Photo', stars : '5/5'},
    {category : 'Low', image : 'http://lorempixel.com/g/850/400/business', description : 'Business Photo', stars : '1/5'},
    {category : 'High', image : 'http://lorempixel.com/g/850/400/cats', description : 'Cat Photo', stars : '4/5'},
    {category : 'Medium', image : 'http://lorempixel.com/g/850/400/city', description : 'City Photo', stars : '3/5'},
    {category : 'Low', image : 'http://lorempixel.com/g/850/400/fashion', description : 'Fashion Photo', stars : '2/5'},
    {category : 'High', image : 'http://lorempixel.com/g/850/400/nature', description : 'Nature Photo', stars : '5/5'}
  ];
  
  $scope.currentImage = _.first($scope.images);
  
  $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    
  $scope.setCurrentImage = function(image) {
    $scope.currentImage = image;
  };
});