angular.module('booksManager', [
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
])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider
            .state('/', {
                    url: "",
                    views: {
                        'books': {
                            templateUrl: "/app/partials/tabs/books_tab.html"
                        },
                        'autori': {
                            templateUrl: "/app/partials/tabs/autori_tab.html"
                        },
                        'edituri': {
                            templateUrl: "/app/partials/tabs/edituri_tab.html"
                        },
                        'categorii': {
                            templateUrl: "/app/partials/tabs/categorii_tab.html"
                        }
                    }
                }
            );

        $urlRouterProvider.otherwise('/');

    }
])

/*
    This demonstrates how $rootScope can be used to pass global app variables (configs) in js.
    For sharing data between controllers, use a service. However, dont create a service only for sharing values!
 */
    .run(function ($rootScope) {
    $rootScope.initTime = new Date();
});