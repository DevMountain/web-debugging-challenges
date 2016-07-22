angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.productid;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData();
    } else {
        $scope.productData = productService.sockData();
    }
});
