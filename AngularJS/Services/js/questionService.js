questionApp.factory/*service*/('questionService', function () {

	return {	
	
		question: {
		
			author: 'Joschia Bounschi',
			text: 'What is JS UI-Framework use?',
			date: '2020-08-13',
			answers: [
				
				{
					author: 'John Witneg',
					text: 'In my opinion, it would be better to use AngularJS because it is the most popular mean and it has great documentation',
					date: '2020-08-14',
					rate: 2
				},
				
				{
					author: 'Tim Rodney',
					text: 'I am prefer more the ExtJs',
					date: '2020-08-14',
					rate: 1
				},
				
				{
					author: 'Sam Wildson',
					text: 'I am using the React JS framework for more than 3 years and i am great with him',
					date: '2020-08-15',
					rate: 0
				},
				
				{
					author: 'Tim Rodney',
					text: 'Angular is a bullshit ! Nobody is using it !',
					date: '2020-08-15',
					rate: 0
				}
			
			]
			
		}
	}
	
});