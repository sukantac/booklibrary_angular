//VALIDATION CHECKIMG WHILE ADDING TO BOOK
bookApp.controller('bookShelfCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    // $rootScope.bookRecord = [];

    $("#booktitle,#author,#page,#publishdate").keyup(function () {
        if ($("#booktitle").val().length > 0 && $("#author").val().length > 0 && $("#page").val().length > 0 && $("#publishdate").val().length > 0) {
            $(".btn").removeAttr('disabled');
        }
        if ($("#booktitle").val().length === 0 || $("#author").val().length === 0 || $("#page").val().length === 0 || $("#publishdate").val().length === 0) {
            $(".btn-default").attr('disabled', 'true');

        }
    });

    //code for enter-key
    $("#publishdate").keyup(function (event) {
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

    $scope.bookStore = function () {

        //declaration of bookObject
        $scope.bookobj = {
            BookTitle: "",
            Author: "",
            Page: "",
            PublishDate: "",
            RowId: ""
        };
        this.rowId = Date.now();
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
        $scope.bookobj.BookTitle =  $rootScope.bookTitle;
        $scope.bookobj.Author = $rootScope.author ;
        $scope.bookobj.Page =  $rootScope.page;
        $scope.bookobj.PublishDate =  $rootScope.publishDate;
        $scope.bookobj.RowId = this.rowId;
        bookRecord.push($scope.bookobj);
        localStorage.setItem("bookArray", JSON.stringify(bookRecord));
       // tableCreation([$scope.bookobj]);
        tableCreation();
        $(".btn-default").attr('disabled', 'true');
        removebutton = document.getElementsByClassName('btn-danger');
        for (var k = 0; k < removebutton.length; k++) {
            removebutton[k].removeEventListener('click', confirmDelete);
            removebutton[k].addEventListener('click', confirmDelete);
        }
          

        //TABLE CREATION
        function tableCreation() {
            var bookRecord= JSON.parse(localStorage.getItem('bookArray')) ? JSON.parse(localStorage.getItem('bookArray')) : [];
            for (var i = 0; i < bookRecord.length; i++){
            document.querySelectorAll('table>tbody')[0].innerHTML += "<tr><td>" + bookRecord[i].BookTitle +
                "</td><td>" + bookRecord[i].Author + "</td><td>" + bookRecord[i].Page +
                "</td><td>" + bookRecord[i].PublishDate +
                "</td><td><button  class='btn btn-danger'  id='book" + bookRecord.RowId + "'>" + "remove" + "</button></td></tr>";

        }
    }
    }
}]);

