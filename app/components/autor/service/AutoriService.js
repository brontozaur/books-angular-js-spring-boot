angular.module('booksManager').factory('AutoriService',
    ['$http', '$q',
        function ($http, $q) {
            return {
                getAutori: function (pageNumber, pageSize) {
                    return $http.get(server + '/autor', {
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
                                console.error('AutoriService.getAutori - error');
                                return $q.reject(errResponse);
                            }
                        );
                },

                saveAutor: function (autor) {
                    var httpMethod = 'POST';
                    if (autor.autorId > 0) {
                        httpMethod = 'PUT';
                    }
                    return $http({
                        url: server + '/autor',
                        method: httpMethod,
                        data: JSON.stringify(autor)
                    })
                        .then(
                            function (response) {
                                return response.data;
                            },
                            function (errResponse) {
                                console.error('AutoriService.saveAutori - error');
                                return $q.reject(errResponse);
                            });
                },

                deleteAutor: function (autor) {
                    var httpMethod = 'DELETE';
                    return $http({
                        url: server + '/autor/' + autor.autorId,
                        method: httpMethod,
                        data: '',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(
                            function (response) {
                                console.log('autor was deleted')
                            },
                            function (errResponse) {
                                console.error('AutoriService.deleteAutor - error');
                                return $q.reject(errResponse);
                            });
                }
            }
        }]);
