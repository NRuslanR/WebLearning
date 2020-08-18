questionApp.factory/*service*/('questionService', function ($http) {
		
	return {
			
		getQuestionDataAsync: function(onSuccess, onFail) {
				
			$http.get('http://localhost/routing/question_app/loadQuestionHandler.php')
			.then(
					
				function (response) {
	
					onSuccess(response.data);
							
				},
						
				function (response) {
						
					onFail(response.statusText);
							
				}
			);
		},
		
		postAnswerDataAsync: function (answer, onSuccess, onFail) {
			
			$http.post(
				'http://localhost/routing/question_app/postAnswerHandler.php', 
				answer
			).then(
			
				function (response) {
					
					onSuccess(response.data);
					
				},
				
				function (response) {
					
					onFail(response.statusText);
					
				}
			);
			
		},
		
		changeAnswerRateAsync: function (answerId, newRate, onSuccess, onFail) {
			
			$http.get(
				'http://localhost/routing/question_app/changeAnswerRateHandler.php',
				{
					params: {
						
						id: answerId,
						rate: newRate
						
					}
				}
				
			).then(
				
				function (response) {
					
					onSuccess(response.data);
					
				},
				
				function (response) {
					
					onFail(response.statusText);
					
				}
			);
			
		}
	};
	
});