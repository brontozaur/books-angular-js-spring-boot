angular.module('booksManager').factory('BooksService',
    ['$http', '$q',
        function ($http, $q) {
            return {
                getBooks: function (pageNumber, pageSize, filterValue, searchType) {
                    return $http.get('/book', {
                            params: {
                                page: pageNumber,
                                limit: pageSize,
                                filterValue: filterValue,
                                searchType: searchType
                            }
                        })
                        .then(
                            function (response) {
                                return response.data;
                            },
                            function (errResponse) {
                                console.error('BooksService.getBooks - error');
                                return $q.reject(errResponse);
                            }
                        );
                },

                saveBook: function (book) {
                    var isUpdate = book.bookId > 0;
                    return $http({
                        url: isUpdate ? ('/book/' + book.bookId) : ("/book"),
                        method: isUpdate ? 'PUT' : 'POST',
                        data: JSON.stringify(book)
                    })
                        .then(
                            function (response) {
                                return response.data;
                            },
                            function (errResponse) {
                                console.error('BookService.saveBook - error');
                                return $q.reject(errResponse);
                            });
                },

                deleteBook: function (book) {
                    var httpMethod = 'DELETE';
                    return $http({
                        url: '/book/' + book.bookId,
                        method: httpMethod
                    })
                        .then(
                            function (response) {
                                console.log('book was deleted')
                            },
                            function (errResponse) {
                                console.error('BooksService.deleteBook - error');
                                return $q.reject(errResponse);
                            });
                }
            }
        }]);
