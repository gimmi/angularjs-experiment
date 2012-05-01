'use strict';

angular.module('myApp.controllers', []).controller('main', ['$scope', function(scope) {
	// TODO
}]).controller('items', ['$scope', function(scope) {
	scope.items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
}]);
