var questionApp = 

angular
	.module('questionApp', ['ngRoute'])
	.config(
		function ($httpProvider, $routeProvider) {
			
				$httpProvider.defaults.withCredentials = true;
				
				$routeProvider
					.when(
						'/question',
						{
							templateUrl: '/routing/question_app/views/question.html',
							controller: 'QuestionController'
						}
					)
					.when(
						'/answer',
						{
							templateUrl: '/routing/question_app/views/answer.html',
							controller: 'AnswerController'
						}
					)
					.when(
						'/edit/:id',
						{
							templateUrl: '/routing/question_app/views/answer.html',
							controller: 'AnswerController'
						}
					).
					when(
						'/edit/:id/:data*',
						{
							templateUrl: '/routing/question_app/views/answer.html',
							controller: 'AnswerController'
						}
					)
					.otherwise({ redirectTo: '/question' });
		}
	);