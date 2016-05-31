angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider){

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTemplate.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTemplate.html',
            controller: 'settingsCtrl'
        })
         .state('products', {
            url: '/products/:productid',
            templateUrl: 'js/products/productTemplate.html',
            controller: 'productsCtrl'
        })
    
    
})