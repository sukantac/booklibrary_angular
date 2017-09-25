// bookApp.service('bookService', function() {
//   this.setBookTable = function() {

//     allRecord = JSON.parse(localStorage.getItem('mainArray')) ? JSON.parse(localStorage.getItem('mainArray')) : [];
//     for (var i = 0; i < allRecord.length; i++) {
//     document.querySelectorAll('table>tbody')[0].innerHTML += "<tr id='Row" + allRecord[i].identity + "'><td>" + allRecord[i].booktitle + "</td><td>" + allRecord[i].author + "</td><td>" + allRecord[i].page + "</td><td>" + allRecord[i].pdate + "</td><td><button  class='btn btn-danger' data-toggle='confirmation' id='book" + allRecord[i].identity + "' >" + "remove" + "</button></td></tr>";

//         }
//       }

// });
bookApp.service("jsonDataFetchService", ['$http', '$q', function ($http, $q) {
  var productName;
  return {
      getproductName: function () {
          var deferred = $q.defer();
          $http.get('js/bookCollection.json')
              .then(function (response) {
                  deferred.resolve(response.data);
              })
              .catch(function (error) {
                  deferred.reject(error);
              });
          return deferred.promise;
      },

  };
}]);
