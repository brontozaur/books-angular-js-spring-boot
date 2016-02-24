angular.module('booksManager').controller('categoriiCtrl',
    ['$scope', 'CategoriiService', '$uibModal',
        function ($scope, CategoriiService, $uibModal) {

            $scope.oldCategorie;
            $scope.hasSelection = false;

            $scope.pageSize = 10;
            $scope.currentPage = 1;
            $scope.categorii = [];
            $scope.totalElements;
            $scope.columnDefs = [
                {
                    name: 'idCategorie',
                    displayName: 'Id',
                    width: 50,
                    cellTooltip: true,
                    type: 'number',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                },
                {
                    name: 'numeCategorie',
                    displayName: 'Nume categorie',
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
                data: $scope.categorii,
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
                    $scope.gridApi.selection.on.rowSelectionChanged($scope, $scope.enableButtonsCategorie)
                },
                rowIdentity: function (row) {
                    return row.id;
                },
                getRowIdentity: function (row) {
                    return row.id;
                }
            };

            $scope.pageChanged = function (newPage) {
                $scope.getCategorii(newPage);
            };

            $scope.getCategorii = function (pageNumber) {
                CategoriiService.getCategorii($scope.currentPage, $scope.pageSize)
                    .then(
                        function (data) {

                            $scope.currentPage = pageNumber;
                            $scope.categorii = data.content;
                            $scope.totalElements = data.totalElements;
                            $scope.gridOptions.data = $scope.categorii;

                            console.log("categorii: " + $scope.categorii.length);

                            $scope.hasSelection = false;

                        },
                        function (errResponse) {
                            console.error(' CategoriiCtrl.getCategorii() - error');
                        }
                    );
            };

            $scope.addCategorie = function () {

                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/categorie/partials/categorie_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return {
                                idCategorie: 0,
                                numeCategorie: ''
                            };
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveCategorie(result);
                });
            };

            $scope.modCategorie = function () {
                if ($scope.gridApi.selection.getSelectedRows().length == 0) {
                    return;
                }
                var categorie = $scope.gridApi.selection.getSelectedRows()[0];
                $scope.oldCategorie = categorie;
                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/categorie/partials/categorie_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return angular.copy(categorie);
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveCategorie(result);
                });
            };

            $scope.saveCategorie = function (categorie) {
                CategoriiService.saveCategorie(categorie)
                    .then(
                        function (data) {
                            if (categorie.idCategorie > 0) { //update
                                var index = $scope.categorii.indexOf($scope.oldCategorie);
                                if (index > 0) {
                                    angular.extend($scope.categorii[index], categorie);
                                } else {
                                    console.log('error detecting index of ' + $scope.oldCategorie.idCategorie);
                                    $scope.getCategorii($scope.currentPage);
                                }
                            } else {
                                $scope.categorii.push(data);
                            }
                        },
                        function (errResponse) {
                            console.error(' CategoriiCtrl.saveCategorie() - error');
                        }
                    );
            };

            $scope.deleteCategorie = function () {
                if ($scope.gridApi.selection.getSelectedRows().length == 0) {
                    return;
                }
                var categorie = $scope.gridApi.selection.getSelectedRows()[0];
                CategoriiService.deleteCategorie(categorie)
                    .then(
                        function (data) {
                            var index = $scope.categorii.indexOf(categorie);
                            if (index > -1) {
                                $scope.categorii.splice(index, 1);
                            }
                            alert('Categorie [' + categorie.numeCategorie + '] a fost stearsa cu succes!');
                        },
                        function (errResponse) {
                            console.error(' CategoriiCtrl.deleteCategorie() - error');
                            alert('Eroare la stergerea categoriei [' + categorie.numeCategorie + ']!');
                        }
                    );
            };

            $scope.enableButtonsCategorie = function () {
                $scope.hasSelection = $scope.gridApi.selection.getSelectedRows().length == 1;
            }
        }
    ]
);
