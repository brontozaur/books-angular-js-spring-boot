angular.module('booksManager').directive('waitDialog',
    ['$rootScope', '$timeout', function ($rootScope, $timeout) {

        return {
            restrict: 'AE',
            replace: true,
            scope: false,
            templateUrl: '/app/components/shared/directives/tmpl/wait_dialog_tmpl.html',
            link: function (scope, element, attrs) {
                $rootScope.$onRootScope('showWaitDialog', function (e, text) {
                    if (text && text.length > 0) {
                        element.find('#message-area').html(text);
                    } else {
                        element.find('#message-area').html("Please wait");
                    }
                    element.modal();
                });

                $rootScope.$onRootScope('hideWaitDialog', function (e) {
                    element.modal('hide');
                });
            }
        };
    }]);