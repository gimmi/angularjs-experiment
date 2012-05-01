'use strict';

describe('myApp controllers', function() {

	beforeEach(module('myApp.controllers'));

	describe('MyCtrl1', function() {
		var target, scope;

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			target = $controller('MyCtrl1', { $scope: scope });
		}));

		it('should initialize controller', function() {
			expect(target).not.toBeUndefined();
		});
	});

	describe('MyCtrl2', function() {
		var target, scope;

		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			target = $controller('MyCtrl2', { $scope: scope });
		}));

		it('should initialize controller', function() {
			expect(target).not.toBeUndefined();
		});
	});
});
