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
                .state('tabs', {
                        url: "",
                        views: {
                            'booksTabContent': {
                                templateUrl: "/app/components/book/partials/books_tab.html"
                            },
                            'autoriTabContent': {
                                templateUrl: "/app/components/autor/partials/autori_tab.html"
                            },
                            'edituriTabContent': {
                                templateUrl: "/app/components/editura/partials/edituri_tab.html"
                            },
                            'categoriiTabContent': {
                                templateUrl: "/app/components/categorie/partials/categorii_tab.html"
                            }
                        }
                    }
                );

            $urlRouterProvider.otherwise('/');
        }])

    .controller('mainCtrl',
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
    )

    /*
     This demonstrates how $rootScope can be used to pass global app variables (configs) in js.
     For sharing data between controllers, use a service. However, dont create a service only for sharing values!
     */
    .run(function ($rootScope) {
        $rootScope.initTime = new Date();
    })

    .config(['$provide', function ($provide) {
        $provide.decorator('$rootScope', ['$delegate', function ($delegate) {

            Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
                value: function (name, listener) {
                    var unsubscribe = $delegate.$on(name, listener);
                    this.$on('$destroy', unsubscribe);

                    return unsubscribe;
                },
                enumerable: false
            });

            return $delegate;
        }]);
    }])

    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpRequestInterceptor');
    });

var server = 'http://localhost:8080';