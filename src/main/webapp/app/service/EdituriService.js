BooksManager.factory('EdituriService', ['$http', '$q', function ($http, $q) {

    return {
        getEdituri: function (pageNumber, pageSize) {
            return $http.get('/editura', {
                    params: {
                        page: pageNumber,
                        limit: pageSize
                    }
                })
                .then(
                    function (response) {
                        return response.data;
                    },
                    function (errResponse) {
                        console.error('EdituraService.getEdituri - error');
                        return $q.reject(errResponse);
                    }
                );
        }
    }
}]);
