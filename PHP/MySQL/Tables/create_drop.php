<?php

  require_once __DIR__ . '\..\connection.php';
  require_once __DIR__ . '\..\..\output_utils.php';

  $conn = mysqli_default_connect();

  if (!$conn)
  {
    outln('Connection failed');
    return;
  }

  $createTableQuery =
    "create table `test`(" .
    "id int not null AUTO_INCREMENT PRIMARY KEY," .
    "name varchar(200) not null);";

  $result = mysqli_query($conn, $createTableQuery);

  if ($result)
    outln("table `test` created");

  else outln("table `test` creation has faield");

  $result = mysqli_query($conn, "DROP TABLE `test`");

  if ($result)
    outln("table `test` was dropped");

  else outln("table `test` dropping has failed");
  
  mysqli_close($conn);

?>
