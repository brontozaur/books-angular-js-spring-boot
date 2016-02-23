angular.module('booksManager').controller('edituriCtrl',
    ['$scope', 'EdituriService', '$uibModal',
        function ($scope, EdituriService, $uibModal) {

            $scope.buttonMod = {
                disabled: true
            };

            $scope.buttonDel = {
                disabled: true
            };

            $scope.oldEditura;

            $scope.pageSize = 10;
            $scope.currentPage = 1;
            $scope.edituri = [];
            $scope.totalElements;
            $scope.columnDefs = [
                {
                    name: 'idEditura',
                    displayName: 'Id',
                    width: 50,
                    cellTooltip: true,
                    type: 'number',
                    enableGrouping: true,
                    groupingShowGroupingMenu: false,
                    groupingShowAggregationMenu: true
                },
                {
                    name: 'numeEditura',
                    displayName: 'Nume editura',
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
                data: $scope.edituri,
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
                    $scope.gridApi.selection.on.rowSelectionChanged($scope, $scope.enableButtonsEditura)
                },
                rowIdentity: function (row) {
                    return row.id;
                },
                getRowIdentity: function (row) {
                    return row.id;
                }
            };

            $scope.pageChanged = function (newPage) {
                $scope.getEdituri(newPage);
            };

            $scope.getEdituri = function (pageNumber) {
                EdituriService.getEdituri($scope.currentPage, $scope.pageSize)
                    .then(
                        function (data) {

                            $scope.currentPage = pageNumber;
                            $scope.edituri = data.content;
                            $scope.totalElements = data.totalElements;
                            $scope.gridOptions.data = $scope.edituri;

                            console.log("edituri: " + $scope.edituri.length);

                        },
                        function (errResponse) {
                            console.error(' EdituriCtrl.getEdituri() - error');
                        }
                    );
            };

            $scope.addEditura = function () {

                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/editura/partials/editura_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return {
                                idEditura: 0,
                                numeEditura: ''
                            };
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveEditura(result);
                });
            };

            $scope.modEditura = function () {
                if ($scope.gridApi.selection.getSelectedRows().length == 0) {
                    return;
                }
                var editura = $scope.gridApi.selection.getSelectedRows()[0];
                $scope.oldEditura = editura;
                var modalInstanceWindow = $uibModal.open({
                    animation: true,
                    templateUrl: '/app/components/editura/partials/editura_window.html',
                    controller: 'modalCtrl',
                    resolve: {
                        editedObject: function () {
                            return angular.copy(editura);
                        }
                    }
                });

                modalInstanceWindow.result.then(function (result) {
                    $scope.saveEditura(result);
                });
            };

            $scope.saveEditura = function (editura) {
                EdituriService.saveEditura(editura)
                    .then(
                        function (data) {
                            if (editura.idEditura > 0) { //update
                                var index = $scope.edituri.indexOf($scope.oldEditura);
                                if (index > 0) {
                                    angular.extend($scope.edituri[index], editura);
                                } else {
                                    console.log('error detecting index of ' + $scope.oldEditura.idEditura);
                                    $scope.getEdituri($scope.currentPage);
                                }
                            } else {
                                $scope.edituri.push(data);
                            }
                        },
                        function (errResponse) {
                            console.error(' EdituriCtrl.saveEditura() - error');
                        }
                    );
            };

            $scope.deleteEditura = function () {
                if ($scope.gridApi.selection.getSelectedRows().length == 0) {
                    return;
                }
                var editura = $scope.gridApi.selection.getSelectedRows()[0];
                EdituriService.deleteEditura(editura)
                    .then(
                        function (data) {
                            var index = $scope.edituri.indexOf(editura);
                            if (index > -1) {
                                $scope.edituri.splice(index, 1);
                            }
                            alert('Editura [' + editura.numeEditura + '] a fost stearsa cu succes!');
                        },
                        function (errResponse) {
                            console.error(' EdituriCtrl.saveEditura() - error');
                            alert('Eroare la stergerea editurii [' + editura.numeEditura + ']!');
                        }
                    );
            };

            $scope.enableButtonsEditura = function () {
                var enableButtons = $scope.gridApi.selection.getSelectedRows().length == 1;
                $scope.buttonMod.disabled = !enableButtons;
                $scope.buttonDel.disabled = !enableButtons;
            }
        }
    ]
);
