(function(){
	
	'use strict';
	 
	function HomeService ($http, $q) {
	 
		
		var test = function() {
			return "From the home service";
		};
		
		/**
		 * Returns list of all cities in DB
		 *//*
		var getCities = function() {
			
			var defer = $q.defer();
			
			$http.get('city/1').success(
				function(result) {
					defer.resolve(result);
				}, function (error) {
					
				}
			);
			
			return defer.promise;
			
		};
		
		*//**
		 * 
		 *//*
		var getCityList = function() {

			var defer = $q.defer();
			
			$.ajax({
				type: 'GET',
		        url: 'ngCity/list',
		        contentType: 'application/json',
		        dataType: 'json',
				success: function(response) {
					console.log('GetCityList() - Success: ', response);
					defer.resolve(response);
				},
				error: function(error) {
					console.log('GetCityList() - Error: ', error);
				}
			});
			
			return defer.promise;
		}*/
		
		return {
			test: test
		}
	 
	};
	
	HomeService.$inject = ['$http', '$q'];
	angular.module('meanStore.views').factory('HomeService', HomeService);
	
})();