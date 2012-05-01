'use strict';

describe('myApp controllers', function() {

	beforeEach(module('myApp.controllers'));

	describe('main', function() {
		var target, scope;

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			target = $controller('main', { $scope: scope });
		}));

		it('should initialize controller', function() {
			expect(target).not.toBeUndefined();
		});
	});

	describe('items', function() {
		var target, scope;

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			target = $controller('items', { $scope: scope });
		}));

		it('should initialize controller', function() {
			expect(target).not.toBeUndefined();
		});
	});
});
