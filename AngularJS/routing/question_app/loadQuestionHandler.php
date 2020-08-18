<?php
	
	include 'questionRegistry.php';
	
	echo json_encode((new QuestionRegistry())->getQuestion());
	
?>