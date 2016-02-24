angular.module('booksManager').controller('booksCtrl',
    ['$scope', 'BooksService', '$uibModal',
        function ($scope, BooksService, $uibModal) {

            $scope.oldBook;
            $scope.hasSelection = false;

            $scope.pageSize = 10;
            $scope.currentPage = 1;
            $scope.books = [];
            $scope.totalElements;
            $scope.columnDefs = [
                {
                    name: 'bookId',
                    displayName: 'Id',
                    width: 50,
                    cellTooltip: true,
                    type: 'number',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                },
                {
                    name: 'title',
                    displayName: 'Titlu',
                    width: 200,
                    cellTooltip: true,
                    type: 'string',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                }
            ];

            $scope.gridOptions = {
                columnDefs: $scope.columnDefs,
                data: $scope.books,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                showTreeRowHeader: false,
                enableSelectAll: false,
                enableFullRowSelection: true,
                enableFiltering: false,
                enableRowHashing: false,
                enableGridMenu: true,
                showGridFooter: false,
                showColumnFooter: false,
                fastWatch: true,
                rowHeight: 25,
                multiSelect: false,
                enableCellEditOnFocus: false,
                enablePaging: false,
                enablePaginationControls: false,
                enableCellEdit: false,
                onRegisterApi: function (gridApi) {
                    $scope.gridApi = gridApi;
                    $scope.gridApi.selection.on.rowSelectionChanged($scope, $scope.enableButtonsBooks)
                },
                rowIdentity: function (row) {
                    return row.id;
                },
                getRowIdentity: function (row) {
                    return row.id;
                }
            };

            $scope.pageChanged = function (newPage, filterValue, searchType) {
                $scope.getBooks(newPage, filterValue, searchType);
            };

            $scope.getBooks = function (pageNumber, filterValue, searchType) {
                BooksService.getBooks($scope.currentPage, $scope.pageSize, filterValue, searchType)
                    .then(
                        function (data) {

                            $scope.currentPage = pageNumber;
                            $scope.books = data.content;
                            $scope.totalElements = data.totalElements;
                            $scope.gridOptions.data = $scope.books;

                            console.log("books: " + $scope.books.length);

                            $scope.hasSelection = false;

                        },
                        function (errResponse) {
                            console.error(' BooksCtrl.getBooks() - error');
                        }
                    );
            };

            $scope.addBook = function () {

                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/book/partials/book_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return {
                                bookId: 0,
                                title: ''
                            };
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveBook(result);
                });
            };

            $scope.modBook = function () {
                if ($scope.gridApi.selection.getSelectedRows().length == 0) {
                    return;
                }
                var book = $scope.gridApi.selection.getSelectedRows()[0];
                $scope.oldBook = book;
                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/book/partials/book_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return angular.copy(book);
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveBook(result);
                });
            };

            $scope.saveBook = function (book) {
                BooksService.saveBook(book)
                    .then(
                        function (data) {
                            if (book.bookId > 0) { //update
                                var index = $scope.books.indexOf($scope.oldBook);
                                if (index > 0) {
                                    angular.extend($scope.books[index], book);
                                } else {
                                    console.log('error detecting index of ' + $scope.oldBook.bookId);
                                    $scope.getBooks($scope.currentPage, '', 'grid');
                                }
                            } else {
                                $scope.books.push(data);
                            }
                        },
                        function (errResponse) {
                            console.error('BooksCtrl.saveBook() - error');
                        }
                    );
            };

            $scope.deleteBook = function () {
                if ($scope.gridApi.selection.getSelectedRows().length == 0) {
                    return;
                }
                var book = $scope.gridApi.selection.getSelectedRows()[0];
                BooksService.deleteBook(book)
                    .then(
                        function (data) {
                            var index = $scope.books.indexOf(book);
                            if (index > -1) {
                                $scope.books.splice(index, 1);
                            }
                            alert('Book [' + book.title + '] a fost stearsa cu succes!');
                        },
                        function (errResponse) {
                            console.error('BooksCtrl.deleteBook() - error');
                            alert('Eroare la stergerea cartii [' + book.title + ']!');
                        }
                    );
            };

            $scope.enableButtonsBooks = function () {
                $scope.hasSelection = $scope.gridApi.selection.getSelectedRows().length == 1;
            }
        }
    ]
);
