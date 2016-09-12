// angular.module("miniRouting", ['ui-router'])

// .config(function($stateProvider){

//     $stateProvider
//         .state('home', {
//             url: '/',
//             templateUrl: 'js/home/homeTmpl.html',
//             controller: 'homeCtrl'
//         })
//         .state('settings', {
//             url: '/settings',
//             templateUrl: 'js/settings/settingsTmpl.html',
//             controller: 'settingsctrl'
//         })            
//          .state('products', {
//             url: '/products/:id',
//             templateUrl: 'js/products/productTmpl.html',
//             controller: 'productsCtrl'
//         })
//     })
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
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
         .state('products', {
            url: '/products/:productid',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        })
    
    
})