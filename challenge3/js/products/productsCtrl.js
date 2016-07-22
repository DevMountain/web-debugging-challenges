angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData;
    } else if (productType === "socks") {
        $scope.productData = productService.sockData;
    }


    // if ($stateParams.id === 'shoes') {
    //     $scope.productData = productService.shoeData;
    // }
    // else if ($stateParams.id === 'socks') {
    //     $scope.productData = productService.sockData;
    // }
});
