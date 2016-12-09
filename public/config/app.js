// config/app.js

(function(){

	'use strict';
	
	angular.module('meanStore.config', []);
	angular.module('meanStore.views', []);
	angular.module('meanStore.components', []);

	angular.module('meanStore', ['ngRoute', 'meanStore.config', 'meanStore.views', 'meanStore.components']);

})();