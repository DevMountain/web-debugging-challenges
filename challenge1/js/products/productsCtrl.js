angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData;
    } else {
        $scope.productData = productService.sockData;
    }
});


//added a squiggly on line 9
