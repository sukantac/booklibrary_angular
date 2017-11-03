
// .controller('AlbumCtrl', function($scope) {
// 
  
//   $scope.currentImage = _.first($scope.images);
  
//   $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    
//   $scope.setCurrentImage = function(image) {
//     $scope.currentImage = image;
//   };
// });
//GALLERY CONTROLLER 
bookApp.controller('AlbumCtrl', ['$scope', '$rootScope','$location','jsonDataFetchService', function ($scope, $rootScope, $location,jsonDataFetchService) {
  jsonDataFetchService.getproductName('js/bookGallery.json').then(function (data) {
    $rootScope.allBookName = data;
    console.log($rootScope.allBookName);
    console.log($rootScope.allBookName[0]);
});
}]);
