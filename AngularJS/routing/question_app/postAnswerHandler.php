<?php
	
	$newAnswerData = json_decode(file_get_contents('php://input'), true);
	
	if (is_null($newAnswerData))
	{
		echo "Incorrect answer data";
		return;
	}
	
	include 'questionRegistry.php';
	
	$questionRegistry = new QuestionRegistry();
	$question = $questionRegistry->getQuestion();

	array_push(
		$question->answers,
		(object)
			[
				"text" => $newAnswerData['text'],
				"author" => $newAnswerData['author'],
				"date" => $newAnswerData['date'],
				"rate" => 0
			]
	);
	
	$questionRegistry->setQuestion($question);
	
	echo "Server: New answer successfully posted (" . count($_SESSION['question']->answers) . ")";
	
?>