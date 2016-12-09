(function() {

	'use-strict';

	function storeHeader() {

		var directive = {
	
			restrict : 'E',
			
			replace : true,
			
			templateUrl : '/components/header/header.html',
			
			controller : 'StoreHeaderController',
			
			link : function link(scope, elem, attr) {
				console.log('linking directive (storeHeader)...');
			}
		
			/*
			 * scope: { msg: '@' },
			 */
			/* link: link, */
		
		}

		return directive;

	};

	storeHeader.$inject = [];
	angular.module('meanStore.components').directive('storeHeader', storeHeader);

})();