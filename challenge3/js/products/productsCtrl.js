angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.id;
    console.log(productType);

    if(productType === "shoes"){
        $scope.productData = productService.sheoData;
    } else {
        $scope.productData = productService.sockData;
    }
});
