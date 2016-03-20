'use strict';

angular.module('app').controller('LayoutHeaderCtrl', function LayoutHeaderCtrl($scope) {
  var vm = $scope.vm = {};
  $scope.name="周凯旋";
});

angular.module('app').directive('layoutHeader', function LayoutHeader() {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'components/layout/header.html',
    controller: 'LayoutHeaderCtrl'
  };
});
