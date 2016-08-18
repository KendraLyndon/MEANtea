app.controller('HomeController',function($scope, TeasService){
  $scope.vw = {};
  $scope.vw.teas = TeasService.all;
  $scope.vw.categories = categoriesArray(TeasService.all);
})
