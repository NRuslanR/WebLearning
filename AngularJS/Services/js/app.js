var questionApp = angular.module('questionApp', [])

questionApp.config(['$httpProvider', function($httpProvider) {
	
	$httpProvider.defaults.withCredentials = true;
	
}]);