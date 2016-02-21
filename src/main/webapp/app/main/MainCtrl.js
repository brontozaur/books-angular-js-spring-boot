angular.module('booksManager').controller('mainCtrl',
    ['$scope',
        function ($scope) {

            $scope.tabNames = [{
                title: 'Carti',
                viewName: 'booksTabContent'
            }, {
                title: 'Edituri',
                viewName: 'edituriTabContent'
            }, {
                title: 'Autori',
                viewName: 'autoriTabContent'
            }, {
                title: 'Categorii',
                viewName: 'categoriiTabContent'
            }];
        }
    ]
);
