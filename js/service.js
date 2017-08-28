bookApp.service('bookService', function() {
  this.setBookTable = function() {

    allRecord = JSON.parse(localStorage.getItem('mainArray')) ? JSON.parse(localStorage.getItem('mainArray')) : [];
    for (var i = 0; i < allRecord.length; i++) {
    document.querySelectorAll('table>tbody')[0].innerHTML += "<tr id='Row" + allRecord[i].identity + "'><td>" + allRecord[i].booktitle + "</td><td>" + allRecord[i].author + "</td><td>" + allRecord[i].page + "</td><td>" + allRecord[i].pdate + "</td><td><button  class='btn btn-danger' data-toggle='confirmation' id='book" + allRecord[i].identity + "' >" + "remove" + "</button></td></tr>";

        }
      }

});
