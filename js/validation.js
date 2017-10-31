//VALIDATION CHECKIMG WHILE ADDING TO BOOK
bookApp.controller('bookShelfCtrl',['$scope','$rootScope','$location', function($scope,$rootScope,$location){
$("#booktitle,#author,#page,#publishdate").keyup(function() {
  if ($("#booktitle").val().length > 0 && $("#author").val().length > 0 && $("#page").val().length > 0 && $("#publishdate").val().length > 0) {
    $(".btn").removeAttr('disabled');
  }
  if ($("#booktitle").val().length === 0 || $("#author").val().length === 0 || $("#page").val().length === 0 || $("#publishdate").val().length === 0){
      $(".btn-default").attr('disabled', 'true');

    }
});

//code for enter-key
$("#publishdate").keyup(function(event) {
  if (event.keyCode === 13) {
    if ($("#booktitle").val().length > 0) {
      $(".btn-default").click();
      $(".btn-default").attr('disabled', 'true');      
    } else {
      alert("please enter a value");
      // swal({
      //    title: 'oops',
      //    text: 'please enter a value',
      //    type: 'warning'
      // });
    }
  }
});
}]);

