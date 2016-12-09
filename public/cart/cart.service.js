(function(){
	
	'use strict';
	 
	function CartService ($http, $q) {
	 
		
		var test = function() {
			return "From the cart service";
		};
		
		
		return {
			test: test
		}
	 
	};
	
	CartService.$inject = ['$http', '$q'];
	angular.module('meanStore.views').factory('CartService', CartService);
	
})();