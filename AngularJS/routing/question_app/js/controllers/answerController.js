questionApp.controller('AnswerController', function ($scope, questionService, $location, $templateCache, $routeParams) {
	
	$scope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
		
			if (nextRoute.templateUrl.indexOf('question') !== -1)
				$templateCache.remove(nextRoute.templateUrl);
			
	});
	
	$scope.$on('$routeChangeSuccess', function () {
		
		var answerId = $routeParams['id'];
		
		console.log(answerId);
		
		if (answerId === 'undefined') return;
		
		questionService.getAnswerData(
			answerId,
			function (answer) {
				
				$scope.answer = answer;
				
				console.log(`Answer ${answerId}`);
				console.log(answer);
				
			},
			
			function (error) {
				
				alert('The getting of the answer data has failed');
				
			}
		);
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