angular.module('booksManager').factory('httpRequestInterceptor', ['$rootScope', '$q', '$document', function ($rootScope, $q, $document) {
    return {

        'request': function (config) {
            return config;
        },
        'requestError': function (response) {
            if (response) {
                // $rootScope.$emit('notifyError', "ERROR");
                console.log('Error ' + JSON.stringify(response));
            }
            return $q.reject(response);
        },
        'response': function (response) {
            if (response && response.status) {
                // console.log("Request OK");
            }
            return response;
        },
        'responseError': function (errResponse) {
            if (errResponse) {
                console.log("Error " + errResponse);
            }
            return $q.reject(errResponse);
        }
    };
}]);