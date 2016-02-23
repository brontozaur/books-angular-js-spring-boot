angular.module('booksManager').controller('modalCtrl', function ($scope, $uibModalInstance, editedObject) {

    $scope.editedObject = editedObject;

    $scope.ok = function (result) {
        $uibModalInstance.close(result);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});