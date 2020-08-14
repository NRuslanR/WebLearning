questionApp.directive('answerList', function () {

	return {
		
		link: function (scope, element, attrs) {
			
			scope.data = scope[attrs['source']];
			
		},
		
		restrict: 'E',
		template: 
			'<div class="answerMark" ng-class="answerBlockClass"' + 
			    'ng-repeat="answer in data.answers"' + 
				'ng-mouseover="changeAnswerBlockClass($event)"' + 
				'ng-mouseenter="changeAnswerBlockClass($event)"' +
				'ng-mouseleave="changeAnswerBlockClass($event)"' +
			'>' +
				'<h3>{{ answer.text }}</h3>' +
				'<p><b>Author: {{ answer.author }}</b></p>' +
				'<p><i>Date: {{ answer.date }}</i></p>' +
				'<div class="vote">' +
					'<a class="vote-up" ng-click="voteUp(answer)">+</a>' +
					'&nbsp;<span class="rate">{{ answer.rate }}</span>&nbsp;' +
					'<a class="vote-down" ng-click="voteDown(answer)">-</a>' +
				'</div>' +
			'</div>'
			
	}
			
});