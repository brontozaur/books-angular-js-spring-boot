angular.module('booksManager').factory('CategoriiService',
    ['$http', '$q',
        function ($http, $q) {
            return {
                getCategorii: function (pageNumber, pageSize) {
                    return $http.get(server + '/categorie', {
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
                                console.error('CategorieService.getCategorii - error');
                                return $q.reject(errResponse);
                            }
                        );
                },

                saveCategorie: function (categorie) {
                    var httpMethod = 'POST';
                    if (categorie.idCategorie > 0) {
                        httpMethod = 'PUT';
                    }
                    return $http({
                        url: server + '/categorie',
                        method: httpMethod,
                        data: JSON.stringify(categorie)
                    })
                        .then(
                            function (response) {
                                return response.data;
                            },
                            function (errResponse) {
                                console.error('CategorieService.saveCategorie - error');
                                return $q.reject(errResponse);
                            });
                },

                deleteCategorie: function (categorie) {
                    var httpMethod = 'DELETE';
                    return $http({
                        url: server + '/categorie/' + categorie.idCategorie,
                        method: httpMethod
                    })
                        .then(
                            function (response) {
                                console.log('categorie was deleted')
                            },
                            function (errResponse) {
                                console.error('CategorieService.deleteCategorie - error');
                                return $q.reject(errResponse);
                            });
                }
            }
        }]);
