app.controller('CheckoutController',function($scope, BagService){
  $scope.vw = {};
  $scope.vw.bag = BagService.all;
  $scope.findSubtotal = function(item){
    var price = item.price/100;
    var subtotal = item.quantity*price;
    return subtotal;
  }
  $scope.findTotal = function(){
    var total = 0;
    $scope.vw.bag.forEach(function(product){
      total += $scope.findSubtotal(product);
    })
    return total;
  }
  $scope.toggleQuantity = function(item){
    item.quantitySet = !item.quantitySet;
  }
  $scope.remove = function(item){
    BagService.remove(item);
  }
})
