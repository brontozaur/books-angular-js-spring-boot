angular.module('booksManager').directive('userNotification', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    return {
        restrict: 'AE',
        replace: true,
        scope: false,
        templateUrl: '/app/components/shared/directives/tmpl/user_notification_tmpl.html',
        link: function (scope, element, attrs) {

            $rootScope.$onRootScope('notifyInfo', function (e, text) {

                element.find('#user-notification-text').html(text);
                element.find('#user-notification-text').addClass('active info');

                $timeout(function () {
                    element.find('#user-notification-text').removeClass('active info');
                }, 3500);
            });

            $rootScope.$onRootScope('notifyError', function (e, text) {

                element.find('#user-notification-text').html(text);
                element.find('#user-notification-text').addClass('active error');

                $timeout(function () {
                    element.find('#user-notification-text').removeClass('active error');
                }, 3500);
            });
        }
    };
}]);