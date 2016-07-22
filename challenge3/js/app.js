angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider){

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
            url: '/products/:id', // everywhere else was asking for id not productid
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        })


})

// all templateurl's were spelled Template instead of Tmpl. when i clicked a link.. i got a 404 which was a sign that told me that it wasnt able to receive the html files that it needed so i checked here first.
