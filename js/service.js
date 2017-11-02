//TO FETCH DATA FROM JSON
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
//RETAINING THE CURRENT STATE OF PAGE WHILE REFRESHING

bookApp.service('pageRefreshControllingService', function () {
    var pageStatus;

    this.setStatus = function (currentStatus) {
        pageStatus = currentStatus;
        localStorage.setItem('pagestatus', JSON.stringify(pageStatus));

    }
    this.getStatus = function () {
        var pageStatus = JSON.parse(localStorage.getItem('pagestatus'));
        return pageStatus;
    }

});