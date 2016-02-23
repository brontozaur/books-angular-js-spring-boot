angular.module('booksManager').factory('EdituriService',
    ['$http', '$q',
        function ($http, $q) {
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
                },

                saveEditura: function (editura) {
                    var httpMethod = 'POST';
                    if (editura.idEditura == 0) {
                        httpMethod = 'PUT';
                    }
                    return $http({
                        url: '/editura',
                        method: httpMethod,
                        data: JSON.stringify(editura)
                    })
                        .then(
                            function (response) {
                                return response.data;
                            },
                            function (errResponse) {
                                console.error('EdituraService.saveEditura - error');
                                return $q.reject(errResponse);
                            });
                },

                deleteEditura: function (editura) {
                    var httpMethod = 'DELETE';
                    return $http({
                        url: '/editura/' + editura.idEditura,
                        method: httpMethod
                    })
                        .then(
                            function (response) {
                                console.log('editura was deleted')
                            },
                            function (errResponse) {
                                console.error('EdituraService.deleteEditura - error');
                                return $q.reject(errResponse);
                            });
                }
            }
        }]);
