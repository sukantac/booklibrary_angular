bookApp.factory('userService', ['$rootScope', function ($rootScope) {
    
        var service = {
    
            model: {
                name: '',
                password: ''
            },
    
            SaveState: function () {
                localStorage.userService = angular.toJson(service.model);
            },
    
            RetrieveState: function () {
                service.model = angular.fromJson(localStorage.userService);
            }
        }
    
        $rootScope.$on("savestate", service.SaveState);
        $rootScope.$on("retrievestate", service.RetrieveState);
    
        return service;
    }]);
    