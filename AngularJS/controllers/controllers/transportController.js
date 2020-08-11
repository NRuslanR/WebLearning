var transportApp = angular.module('transportApp');

transportApp.controller('transportController', function ($scope) {
			
				$scope.transports = 
					[
						{
							name: "Bus",
							route: "A-B-C-D"
						},
						
						{
							name: "Lightweight auto",
							route: "limitless"
						},
						
						{
							name: "Lightweight train",
							route: "Loopback"
						}
					
					];
				
			});