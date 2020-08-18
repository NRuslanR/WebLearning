<?php

	if (!isset($_GET['id'])) {
		
		echo "The answer for which it's needed to get data has not found";
		
		return;
	}
	
	include 'questionRegistry.php';
	
	$answerId = $_GET['id'];
	
	$questionRegistry = new QuestionRegistry();
	
	$answer = $questionRegistry->getAnswer($answerId);
	
	if (!is_null($answer))
		echo json_encode($answer);
	
	else echo "Answer hasn't found";
	
?>