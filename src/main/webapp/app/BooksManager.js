var BooksManager = angular.module('BooksManager', [
    'ui.router',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.cellNav',
    'ui.grid.edit',
    'ui.grid.resizeColumns',
    'ui.grid.pinning',
    'ui.grid.selection',
    'ui.grid.moveColumns',
    'ui.grid.exporter',
    'ui.grid.importer',
    'ui.grid.grouping',
    'ui.grid.pagination',
    'ui.grid.autoResize'
]);

BooksManager.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('/', {
                    url: "",
                    views: {
                        'books': {
                            templateUrl: "./partials/tabs/books_tab.html"
                        },
                        'autori': {
                            templateUrl: "./partials/tabs/autori_tab.html"
                        },
                        'edituri': {
                            templateUrl: "./partials/tabs/edituri_tab.html"
                        },
                        'categorii': {
                            templateUrl: "./partials/tabs/categorii_tab.html"
                        }
                    }
                }
            );

        $urlRouterProvider.otherwise('/');

    }
]);