var BooksManager = angular.module('BooksManager', [
    'ui.router',
    'ui.bootstrap',
    'ui.grid'
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