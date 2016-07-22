angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.retrieveShoeData();
    } else {
        $scope.productData = productService.retrieveSockData();
    }
});
