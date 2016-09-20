<?php

	if(isset($_POST['model'])){
		$test = $_POST['model'];
		$json = '{"value": "' . $test	. '"}';
	}

	echo $json;	
