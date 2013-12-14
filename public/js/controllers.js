angular.module('ShortlyApp')
  .controller('MainController', function($scope, $http) {

    $http({
      method: 'GET',
      url: '/links'
    }).success(function(data) {
      $scope.links = data;
    });
  });