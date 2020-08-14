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
				
			//$http.get('http://localhost/questionApp/question.json')
			$http({
				method: 'GET',
				url: 'http://localhost/questionApp/question.json',
				timeout: 600,
				params: { question_id: null },
				headers: { 'Content-Type': 'application/json' }
			})
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
		}
	};
	
});