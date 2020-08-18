questionApp.controller('AnswerController', function ($scope, questionService, $location, $templateCache) {
	
	$scope.$on('routeChangeStart', function (event, nextRoute, currentRoute) {
		
			if (nextRoute.templateUrl.indexOf('question') !== -1)
				$templateCache.remove(nextRoute.templateUrl);
			
	});
	
	$scope.onPostAnswerDataRequested = function (answer, answerForm) {
		
		if (answer.$invalid) {
			
			alert("Answer data isn't correct");
			return;
			
		}
		
		questionService.postAnswerDataAsync(
			answer,
			function (success) {
				
				alert(`Answer has successfully posted (${success}). Update your answer list`);
				
				$location.path('/question');
			},
			
			function (error) {
				
				alert('Error occurred during the answer posting: ' + error);
				
			}
		);
		
	};
	
});