//VALIDATION CHECKIMG WHILE ADDING BOOK

bookApp.controller('bookShelfCtrl', ['$scope', '$rootScope', '$location', 'pageRefreshControllingService', function ($scope, $rootScope, $location, pageRefreshControllingService) {
    $rootScope.bookRecord = [];

    $("#booktitle,#author,#page,#publishdate").keyup(function () {
        if ($("#booktitle").val().length > 0 && $("#author").val().length > 0 && $("#page").val().length > 0 && $("#publishdate").val().length > 0) {
            $(".btn").removeAttr('disabled');
        }
        if ($("#booktitle").val().length === 0 || $("#author").val().length === 0 || $("#page").val().length === 0 || $("#publishdate").val().length === 0) {
            $(".btn-default").attr('disabled', 'true');

        }
    });
    //TABLE CREATION WHILE PAGE LOAD
    var bookRecord = JSON.parse(localStorage.getItem('bookArray')) ? JSON.parse(localStorage.getItem('bookArray')) : [];
    tableCreation(bookRecord);
    removebutton = document.getElementsByClassName('btn-danger');
    for (var k = 0; k < removebutton.length; k++) {
        removebutton[k].removeEventListener('click', confirmDelete);
        removebutton[k].addEventListener('click', confirmDelete);
    }

    //code for enter-key
    $("#publishdate").keyup(function (event) {
        if (event.keyCode === 13) {
            if ($("#booktitle").val().length > 0) {
                $(".btn-default").click();
                $(".btn-default").attr('disabled', 'true');
            } else {
                alert("please enter a value");
            }
        }
    });

    $scope.bookStore = function () {

        //declaration of bookObject
        $scope.bookobj = {
            BookTitle: "",
            Author: "",
            Page: "",
            PublishDate: "",
            RowId: ""
        };
        $scope.rowId = Date.now();
        $rootScope.bookTitle = $scope.bookttl;
        $rootScope.author = $scope.auth;
        $rootScope.page = $scope.pageno;
        $rootScope.publishDate = $scope.publishdate;
        //refreshing the input box
        $scope.bookttl = "";
        $scope.auth = "";
        $scope.pageno = "";
        $scope.publishdate = "";
        //PUSHING THE VALUE INTO OBJECT
        $scope.bookobj.BookTitle = $rootScope.bookTitle;
        $scope.bookobj.Author = $rootScope.author;
        $scope.bookobj.Page = $rootScope.page;
        $scope.bookobj.PublishDate = $rootScope.publishDate;
        $scope.bookobj.RowId = $scope.rowId;
        bookRecord.push($scope.bookobj);
        localStorage.setItem("bookArray", JSON.stringify(bookRecord));
        // tableCreation([$scope.bookobj]);
        tableCreation([$scope.bookobj]);
        $(".btn-default").attr('disabled', 'true');
        removebutton = document.getElementsByClassName('btn-danger');
        for (var k = 0; k < removebutton.length; k++) {
            removebutton[k].removeEventListener('click', confirmDelete);
            removebutton[k].addEventListener('click', confirmDelete);
        }
    }
    //TABLE CREATION
    function tableCreation(bookDetails) {
        //    var bookRecord = JSON.parse(localStorage.getItem('bookArray')) ? JSON.parse(localStorage.getItem('bookArray')) : [];
        for (var i = 0; i < bookDetails.length; i++) {
            document.querySelectorAll('table>tbody')[0].innerHTML += "<tr><td>" + bookDetails[i].BookTitle +
                "</td><td>" + bookDetails[i].Author + "</td><td>" + bookDetails[i].Page +
                "</td><td>" + bookDetails[i].PublishDate +
                "</td><td><button  class='btn btn-danger'  id='book" + bookDetails[i].RowId + "'>" + "remove" + "</button></td></tr>";

        }
    }
    //CONFIRM TO DELETE BOOK FROM LIBRARY
    function confirmDelete() {
        var storage = JSON.parse(localStorage.getItem('bookArray')) ? JSON.parse(localStorage.getItem('bookArray')) : [];
        var r = confirm("Sure to delete");
        if (r === true) {
            for (var z = 0; z < storage.length; z++) {
                var buttonId = "book" + storage[z].RowId;
                if (buttonId === this.id) {

                    bookRecord.splice(z, 1);
                    bookRecord.splice(z, 1);
                    localStorage.setItem("bookArray", JSON.stringify(bookRecord));
                    this.parentNode.parentNode.remove();
                }
            }
        }
    }

    //BACKTO HOME PAGE
    $scope.backToHome = function () {
        $location.path('/homePage');
        $scope.currentstatus = "homepage";
        pageRefreshControllingService.setStatus($scope.currentstatus);
    }
}]);

