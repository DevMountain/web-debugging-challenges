angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams){
    var productType = $stateParams.id;

    if(productType === "shoes"){
        $scope.productData = productService.shoeData;
    } else {
        $scope.productData = productService.sockData;
    }
}); // Missing curly bracket. opened console saw that the error was in productsCtrl.js:9
