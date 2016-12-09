(function(){
	
	'use strict';
	 
	function RegisterService ($http, $q) {
	 
		
		var registerUser = function() {
			return "From the register service";
		};
		
		
		return {
			registerUser: registerUser
		}
	 
	};
	
	RegisterService.$inject = ['$http', '$q'];
	angular.module('meanStore.views').factory('RegisterService', RegisterService);
	
})();