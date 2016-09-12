angular.module('miniRouting')
  .controller("productsCtrl", function($scope, $stateParams, productService) {
    // console.log($stateParams.id)
    var productType = $stateParams.id;
    console.log(typeof productType)

    if(productType === "shoes"){
        $scope.productData = productService.shoeData;
    } else {
        $scope.productData = productService.sockData;
    }
});
