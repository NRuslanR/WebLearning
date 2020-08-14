questionApp.factory/*service*/('questionService', function ($http) {

	return {
			
		getQuestionDataAsync: function(onSuccess, onFail) {
				
			$http({
				method: 'GET',
				url: 'http://localhost/questionApp/question.json'
			})
			.then(
					
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