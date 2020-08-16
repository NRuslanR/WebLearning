questionApp.factory/*service*/('questionService', function ($http) {

	function logResponseInfo(response)
	{
		console.log('status: ' + response.status);
		console.log('headers: ' + response.headers);
		console.log('statusText: ' + response.statusText);
		console.log('url: ' + response.config.url);
	}
		
	return {
			
		getQuestionDataAsync: function(onSuccess, onFail) {
				
			$http.get('http://localhost/questionApp/loadQuestionHandler.php')
			.then(
					
				function (response) {
							
					logResponseInfo(response);
					
					onSuccess(response.data);
							
				},
						
				function (response) {
						
					logResponseInfo(response);
					
					onFail(response.statusText);
							
				}
			);
		},
		
		postAnswerDataAsync: function (answer, onSuccess, onFail) {
			
			$http.post(
				'http://localhost/questionApp/postAnswerHandler.php', 
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
				'http://localhost/questionApp/changeAnswerRateHandler.php',
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