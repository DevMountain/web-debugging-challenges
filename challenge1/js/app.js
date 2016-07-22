angular.module('miniRouting', ['ui.router']) // should be ui.router not ui-router

	.config( function($stateProvider) {

	    $stateProvider
	        .state('home', {
	            url: '/',
	            templateUrl: 'js/home/homeTmpl.html',
	            controller: 'homeCtrl'
	        })
	        .state('settings', {
	            url: '/settings',
	            templateUrl: 'js/settings/settingsTmpl.html',
	            controller: 'settingsctrl'
	        })
	        .state('products', {
	            url: '/products/:id',
	            templateUrl: 'js/products/productTmpl.html',
	            controller: 'productsCtrl'
	        });
	});
// A whole lot of parenthesis in the wrong place. missing closing brackets/parenthesis
