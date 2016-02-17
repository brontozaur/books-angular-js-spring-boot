BooksManager.controller('MainCtrl',
    ['$scope',
        function ($scope) {

            $scope.tabNames = [{
                title: 'Carti',
                route: 'books'
            }, {
                title: 'Edituri',
                route: 'edituri'
            }, {
                title: 'Autori',
                route: 'autori'
            }, {
                title: 'Categorii',
                route: 'categorii'
            }];
        }
    ]
);
