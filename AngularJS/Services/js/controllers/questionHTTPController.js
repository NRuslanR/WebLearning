questionApp.controller('questionController', function ($scope, questionService, $timeout) {

	$scope.voteUp = function (answer) {
		
		questionService.changeAnswerRateAsync(
			answer.id, 
			answer.rate + 1,
			function (data) {
				
				alert(data);
				
				answer.rate = data.rate;
				
			}
		);
		
	};
	
	$scope.voteDown = function (answer) {
		
		questionService.changeAnswerRateAsync(
			answer.id,
			answer.rate - 1,
			function (data) {
				
				answer.rate = date.rate;
				
			}
		);
		
	};
	
	$scope.questionBlockClass = "questionBlock";
	
	$scope.changeQuestionBlockClass = function (e) {
		
		$scope.questionBlockClass = (e.type === "mouseover") ? 'questionSelectedBlock' : 'questionBlock';
		
	};
	
	$scope.answerBlockClass = "answerBlock";
	
	$scope.changeAnswerBlockClass = function (e) {
		
		var answerBlock = angular.element(e.target);
		
		if (!answerBlock.hasClass('answerMark')) return;
		
		if (e.type === "mouseover") {
			
			answerBlock.removeClass('answerBlock');
			answerBlock.addClass('answerSelectedBlock');
		}
		
		else
		{
			answerBlock.removeClass('answerSelectedBlock');
			answerBlock.addClass('answerBlock');
		}
		
	};
	
	$scope.onQuestionDataRequested = function () {
		
		delete $scope.question;
		
		$timeout(
			function () {
				
				questionService.getQuestionDataAsync(
					function (question) {
						
						$scope.question = question;
						
						console.log(question);
						
					},
					
					function (error) {
						
						alert('Error occured during the question data getting: ' + error)
					
					}
				);
			},
			3000
		).then(
			function () {
				
				alert('Timer has expired');
				
			}
		);
		
	};
	
	$scope.onPostAnswerDataRequested = function (answer, answerForm) {
		
		if (answer.$invalid) {
			
			alert("Answer data isn't correct");
			return;
			
		}
		
		questionService.postAnswerDataAsync(
			answer,
			function (success) {
				
				alert(`Answer has successfully posted (${success}). Update your answer list`);
				
			},
			
			function (error) {
				
				alert('Error occurred during the answer posting: ' + error);
				
			}
		);
		
	};

});