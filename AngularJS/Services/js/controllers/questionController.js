questionApp.controller('questionController', function ($scope, questionService) {
	
	$scope.question = questionService.question;
	
	$scope.voteUp = function (answer) {
		
		++answer.rate;
		
	};
	
	$scope.voteDown = function (answer) {
		
		if (answer.rate > 0)	
			--answer.rate;
		
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

});