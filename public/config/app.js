(function() {

	'use strict';

	angular.module('meanStore.config', []);
	angular.module('meanStore.views', []);
	angular.module('meanStore.components', []);

	angular.module('meanStore', [ 
         'ngRoute', 
         'meanStore.config', 
         'meanStore.views', 
         'meanStore.components' 
    ]);

/*	function run($rootScope, $location, authentication) {
		$rootScope.$on('$routeChangeStart',
				function(event, nextRoute, currentRoute) {
					if ($location.path() === '/profile'
							&& !authentication.isLoggedIn()) {
						$location.path('/');
					}
				});
	}

	angular.module('meanStore').run(
			[ '$rootScope', '$location', 'authentication', run ]);*/

})();