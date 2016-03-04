angular.module('booksManager').factory('UserNotificationService', ['$rootScope', function ($rootScope) {

    function info(text) {
        $rootScope.$emit('notifyInfo', text);
    }

    function error(text) {
        $rootScope.$emit('notifyError', text);
    }

    return {
        info: info,
        error: error
    }
}]);
