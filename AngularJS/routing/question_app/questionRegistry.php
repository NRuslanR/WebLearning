<?php

	class QuestionRegistry {
		
		public function __construct()
		{
			if (session_status() == PHP_SESSION_NONE)
				session_start();
		}
		
		public function setQuestion($newQuestion) {
		
			$_SESSION['question'] = $newQuestion;
			
		}
		
		public function getQuestion() {
			
			if (!isset($_SESSSION['question']))
			{
				$this->setQuestion(json_decode(file_get_contents('question.json')));
			}
			
			return $_SESSION['question'];
			
		}

	}
	
?>