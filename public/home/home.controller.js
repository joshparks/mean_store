(function(){
	
	'use strict';

	function HomeController ($scope, HomeService) {

		var self = this;
		
		self.message = "Home Controller in action";
		
		self.serviceMsg = HomeService.test();

	};
	
	HomeController.$inject = ['$scope', 'HomeService'];
	angular.module('meanStore.views').controller('HomeController', HomeController);
	
})();