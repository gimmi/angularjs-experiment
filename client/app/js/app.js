'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).config(['$routeProvider', function(routeProvider) {
	routeProvider.when('/main', {
		template: 'partials/main.html',
		controller: 'main'
	});
	routeProvider.when('/items', {
		template: 'partials/items.html',
		controller: 'items'
	});
	routeProvider.otherwise({
		redirectTo: '/main'
	});
}]);
