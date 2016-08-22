app.controller('HomeController',function($scope, TeasService, BagService){
  $scope.vw = {};
  $scope.vw.teas = TeasService.all;
  $scope.vw.bag = BagService.all;
  $scope.vw.categories = categoriesArray(TeasService.all);
  $scope.vw.quantities = [1,2,3,4,5,6];
  $scope.vw.quantity = 1;
  $scope.vw.add = function(item, quantity){
    BagService.add(item, quantity);
    console.log(BagService.all);
  }
})
