angular.module('miniRouting', ['ui.router'])

angular.module('miniRouting')
.config(function($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
         .state('products', {
            url: '/products/:id',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        })
});
