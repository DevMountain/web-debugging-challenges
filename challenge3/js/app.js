angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider){

    $stateProvider
    /////////////
    /// 1 ALL TEMPLATES PATHS NEED TO BE FIXED TO Tmpl///////
    ////////////
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
            url: '/products/:productid',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        })


})
