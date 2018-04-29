angular.module('booksManager').controller('autoriCtrl',
    ['$scope', 'AutoriService', '$uibModal', 'UserNotificationService', 'WaitDialogService',
        function ($scope, AutoriService, $uibModal, UserNotificationService, WaitDialogService) {

            $scope.oldAutor;
            $scope.hasSelection = false;

            $scope.pageSize = 10;
            $scope.currentPage = 1;
            $scope.autori = [];
            $scope.totalElements;
            $scope.columnDefs = [
                {
                    name: 'autorId',
                    displayName: 'Id',
                    width: 50,
                    cellTooltip: true,
                    type: 'number',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                },
                {
                    name: 'nume',
                    displayName: 'Nume',
                    width: 200,
                    cellTooltip: true,
                    type: 'string',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                },
                {
                    name: 'dataNasterii',
                    displayName: 'Data nasterii',
                    width: 200,
                    cellTooltip: true,
                    type: 'date',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                }
            ];

            $scope.gridOptions = {
                columnDefs: $scope.columnDefs,
                data: $scope.autori,
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
                    $scope.gridApi.selection.on.rowSelectionChanged($scope, $scope.enableButtonsAutori)
                },
                rowIdentity: function (row) {
                    return row.id;
                },
                getRowIdentity: function (row) {
                    return row.id;
                }
            };

            $scope.pageChanged = function (newPage) {
                $scope.getAutori(newPage);
            };

            $scope.getAutori = function (pageNumber) {
                WaitDialogService.show('Incarcare edituri...');
                AutoriService.getAutori($scope.currentPage, $scope.pageSize)
                    .then(
                        function (data) {
                            WaitDialogService.hide();
                            $scope.currentPage = pageNumber;
                            $scope.autori = data.content;
                            $scope.totalElements = data.totalElements;
                            $scope.gridOptions.data = $scope.autori;

                            console.log("autori: " + $scope.autori.length);

                            $scope.hasSelection = false;

                        },
                        function (errResponse) {
                            WaitDialogService.hide();
                            console.error(' AutoriCtrl.getAutori() - error');
                            UserNotificationService.error('A intervenit o eroare la incarcarea autorilor!');
                        }
                    );
            };

            $scope.addAutor = function () {

                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/autor/partials/autor_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return {
                                autorId: 0,
                                nume: '',
                                dataNasterii: ''
                            };
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveAutor(result);
                });
            };

            $scope.modAutor = function () {
                if ($scope.gridApi.selection.getSelectedRows().length === 0) {
                    return;
                }
                var autor = $scope.gridApi.selection.getSelectedRows()[0];
                $scope.oldAutor = autor;
                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/autor/partials/autor_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return angular.copy(autor);
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveAutor(result);
                });
            };

            $scope.saveAutor = function (autor) {
                AutoriService.saveAutor(autor)
                    .then(
                        function (data) {
                            if (autor.autorId > 0) { //update
                                var index = $scope.autori.indexOf($scope.oldAutor);
                                if (index >= 0) {
                                    angular.extend($scope.autori[index], autor);
                                } else {
                                    console.log('error detecting index of ' + $scope.oldAutor.idAutor);
                                    $scope.getAutori($scope.currentPage);
                                }
                            } else {
                                $scope.autori.push(data);
                            }
                        },
                        function (errResponse) {
                            console.error('AutoriCtrl.saveAutori() - error');
                        }
                    );
            };

            $scope.deleteAutor = function () {
                if ($scope.gridApi.selection.getSelectedRows().length === 0) {
                    return;
                }
                var autor = $scope.gridApi.selection.getSelectedRows()[0];
                AutoriService.deleteAutor(autor)
                    .then(
                        function (data) {
                            var index = $scope.autori.indexOf(autor);
                            if (index > -1) {
                                $scope.autori.splice(index, 1);
                            }
                            alert('Autorul [' + autor.nume + '] a fost sters cu succes!');
                        },
                        function (errResponse) {
                            console.error('AutoriCtrl.deleteAutor() - error');
                            alert('Eroare la stergerea autorului [' + autor.nume + ']!');
                        }
                    );
            };

            $scope.enableButtonsAutori = function () {
                $scope.hasSelection = $scope.gridApi.selection.getSelectedRows().length === 1;
            }
        }
    ]
);
