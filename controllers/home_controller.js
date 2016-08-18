app.controller('HomeController',function($scope, TeasService){
  $scope.vw = {};
  $scope.vw.teas = TeasService.all;
  $scope.vw.categories = categoriesArray(TeasService.all);
  $scope.vw.quantities = [1,2,3,4,5,6];
  
})
