//////////////////////////////
// 2 FIXED . instead of - to ui.router ///
//////////////////////////////
angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            //////////////////////////////
            // 3 FIXED settingsCtrl link///
            //////////////////////////////
            controller: 'settingsCtrl'
        })
        //////////////////////////////
        // 4 PLACED STATE INSIDE CLOSING BRACKETS///
        //////////////////////////////
         .state('products', {
            url: '/products/:id',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'

        })
        //////////////////////////////
        // 5 FIXED CLOSING BRACKETS///
        //////////////////////////////
})
