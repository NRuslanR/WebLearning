var transportApp = angular.module('transportApp');

transportApp.controller('noScopeController', function() {

	this.message = "Test Message";
	this.date = new Date();
	
});
