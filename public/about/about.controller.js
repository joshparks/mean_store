(function(){
	
	'use strict';

	function AboutController ($scope) {

		var self = this;

		self.message = "About Page in action";
		

	};
	
	AboutController.$inject = ['$scope'];
	angular.module('meanStore.views').controller('AboutController', AboutController);
	
})();