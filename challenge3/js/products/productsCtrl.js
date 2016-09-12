angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){

      var productType = $stateParams.productid;

      if(productType === "shoes"){
        console.log('shoe hit');
        $scope.productData = productService.shoeData;
      } else {
        console.log('sock hit');
        $scope.productData = productService.sockData;
      }
});
