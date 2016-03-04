angular.module('booksManager').factory('WaitDialogService',
    ['$rootScope', function ($rootScope) {

        function show(text) {
            $rootScope.$emit('showWaitDialog', text);
        }

        function hide() {
            $rootScope.$emit('hideWaitDialog');
        }

        return {
            show: show,
            hide: hide
        }
    }]);
