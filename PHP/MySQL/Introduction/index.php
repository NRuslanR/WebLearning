<?php

  require_once __DIR__ . '\..\connection.php';
  require_once __DIR__ . '\..\..\output_utils.php';

  $link = mysqli_default_connect();

  if (!$link)
  {
    outln('Connect to MySQL is failed');
    return;
  }

  outln('Connection to MySQL is successed');

  $result = mysqli_query($link, "SELECT * FROM users");

  if ($result)
    outln('Query execution has successed');

  else outln('Query execution has failed');
  
  mysqli_close($link);

?>
