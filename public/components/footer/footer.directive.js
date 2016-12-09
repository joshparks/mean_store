(function() {

	'use-strict';

	function storeFooter() {

		var directive = {
	
			restrict : 'E',
			
			replace : true,
			
			templateUrl : '/components/footer/footer.templ.html',
			
			link : function link(scope, elem, attr) {
				console.log('linking directive (storeHeader)...');
			}
		
			/*
			 * controller : 'StoreHeaderController',
			 * scope: { msg: '@' },
			 */
			/* link: link, */
		
		}

		return directive;

	};

	storeFooter.$inject = [];
	angular.module('meanStore.components').directive('storeFooter', storeFooter);

})();