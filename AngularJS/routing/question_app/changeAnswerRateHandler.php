<?php

	if (!(isset($_GET['id']) && isset($_GET['rate'])))
	{
		echo "Incorrect data for the changing answer's rate";
		return;
	}
	
	include 'questionRegistry.php';
	
	$questionRegistry = new QuestionRegistry();
	
	$question = $questionRegistry->getQuestion();
	
	$answerId = $_GET['id'];
	$newRate = $_GET['rate'];
	
	if ($newRate < 0) $newRate = 0;
	
	foreach($question->answers as &$answer) {
			
		if ($answer->id == $answerId) {
				
			$answer->rate = $newRate;
				
			break;
		}
	
	}
	
	$questionRegistry->setQuestion($question);
	
	echo json_encode(array("id" => $answerId, "rate" => $newRate));
	
?>