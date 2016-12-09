(function(){
	
	'use strict';

	function StoreHeaderController ($scope, $route) {

		var self = this;

		self.message = "Store header in action";

		/**
		 * Sets active class on navigation tabs
		 */
		self.isActive = function (path) {
		    
			if ($route.current && $route.current.activetab == path) {
		        return true;
		    }
		    
		    return false;
		    
		};
		
	};
	
	StoreHeaderController.$inject = ['$scope', '$route'];
	angular.module('meanStore.components').controller('StoreHeaderController', StoreHeaderController);
	
})();