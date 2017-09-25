var allRecord = [];

//controller part
bookApp.controller('bookShelfCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

  $scope.bookStore = function() {
    var rowId = Date.now();
    var tableRecord = {
      "booktitle": "",
      "author": "",
      "page": "",
      "pdate": "",
      "identity": ""
    };
    var bookTitle = $scope.bookttl;
    var author = $scope.auth;
    var page = $scope.pageno;
    var publishDate = $scope.publishdate;
    tableRecord.booktitle = bookTitle;
    tableRecord.author = author;
    tableRecord.page = page;
    tableRecord.pdate = publishDate;
    tableRecord.identity = rowId;
    allRecord.push(tableRecord);
    localStorage.setItem("mainArray", JSON.stringify(allRecord));
    document.querySelectorAll('table>tbody')[0].innerHTML += "<tr id='Row" + rowId + "'><td>" + bookTitle + "</td><td>" + author + "</td><td>" + page + "</td><td>" + publishDate + "</td><td><button  class='btn btn-danger' data-toggle='confirmation' id='book" + rowId + "'>" + "remove" + "</button></td></tr>";
    console.log(bookTitle);
    $scope.bookttl = "";
    $scope.auth = "";
    $scope.pageno = "";
    $scope.publishdate = "";
  }
}]);
//Home controller
