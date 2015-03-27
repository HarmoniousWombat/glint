// Invite controller
// ----------------
//

// The pattern we're using here is the pattern we're using across all our controllers: the controllerAs syntax. This syntax is for Angular versions 1.2 and up, and means you don't have to use `$scope` anymore. Instead, inside of your HTML, you declare your controller with `ng-controller="IdeasCtrl as ictrl"` and reference your variables within that controlled scope as `ictrl.<varname>`. Additionally, instead of setting your properties within your controller to `$scope`, assign your controller's `this` to a variable called self and set your properties to that.
angular.module('glint.invite', [])

// The ModalCtrl is part of the angular-ui directive to display a modal
.controller('InviteCtrl', function($modal) {
  var self = this;
  self.open = function(invite) {
    var modalInstance = $modal.open({
      templateUrl: 'app/invite/invite.html',
      controller: 'InviteInstanceCtrl',
      size: 'sm',
      resolve: {  // allows us to access idea object in DetailsInstanceCtrl
        invite: function () {
          return invite;
        }
      }
    });
  };
})

.controller('InviteInstanceCtrl', function($scope, $modalInstance, invite) {
  $scope.submitDetails = function() {
    invite.details = $scope.markdownText;
    $modalInstance.close();
  };

  $scope.cancel = function() {
    console.log('clicked cancel');
    $modalInstance.dismiss('cancel');
  };
});
