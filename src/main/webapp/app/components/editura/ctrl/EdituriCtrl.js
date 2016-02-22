angular.module('booksManager').controller('edituriCtrl',
    ['$scope', 'EdituriService',
        function ($scope, EdituriService) {

            $scope.pageSize = 1;
            $scope.currentPage = 1;
            $scope.edituri = [];
            $scope.totalElements;

            $scope.gridOptions = {
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
                },

                columnDefs: [
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
                ]
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
        }
    ]
);
