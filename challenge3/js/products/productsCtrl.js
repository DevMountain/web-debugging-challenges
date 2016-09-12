angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.productid;
    console.log(productType)
    if(productType === "shoes"){
        $scope.productData = productService.getShoes();
        console.log($scope.productData);
    } else {
        $scope.productData = productService.getSocks();
    }
});
