(function() {

	'use strict';

	angular.module('meanStore.config')

	.config(['$locationProvider', function($locationProvider) {
	
		$locationProvider.html5Mode(false);
		
		$locationProvider.hashPrefix('');
		
	}]);
	
})();