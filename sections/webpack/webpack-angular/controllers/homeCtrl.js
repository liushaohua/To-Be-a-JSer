define([
  'app.js',
], Ready(function(app) {
  app.controller('homeCtrl', [
    '$scope',
    'serviceNormalA',
    'serviceNormalB',
    function($scope, serviceNormalA, serviceNormalB) {
      $scope.location = 'homeCtrl';
    }
  ])
}))
