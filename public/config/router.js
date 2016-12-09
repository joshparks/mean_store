(function(){
	
	'use strict';

	angular.module('meanStore.config')
	
		.config(['$routeProvider', function($routeProvider) {
			
			$routeProvider
		
			.when('/', {
				templateUrl : 'home/home.html',
				controller : 'HomeController',
				activetab: 'home'
			})
			
			.when('/about', {
				templateUrl : 'about/about.html',
				controller : 'AboutController',
				activetab: 'about'
			})
		
			.otherwise({
				redirectTo : '/'
			});
			
		}]);

})();