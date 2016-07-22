angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData; // shoeData not sheoData. this one i just caught on my own. no real debugging here.
    } else {
        $scope.productData = productService.sockData;
    }
});
