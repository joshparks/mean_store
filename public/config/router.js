(function(){
	
	'use strict';

	angular.module('meanStore.config')
	
		.config(['$routeProvider', function($routeProvider) {
			
			$routeProvider
		
			.when('/', {
				templateUrl : 'home/home.view.html',
				controller : 'HomeController',
				activetab: 'home'
			})
			
			.when('/about', {
				templateUrl : 'about/about.view.html',
				controller : 'AboutController',
				activetab: 'about'
			})
			
			.when('/register', {
				templateUrl : 'register/register.view.html',
				controller : 'RegisterController',
				activetab: 'register'
			})
			
			.when('/login', {
				templateUrl : 'login/login.view.html',
				controller : 'LoginController',
				activetab: 'login'
			})
		
			.otherwise({
				redirectTo : '/'
			});
			
		}]);

})();