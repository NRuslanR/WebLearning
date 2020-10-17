<?php

  require_once __DIR__ . '\..\..\output_utils.php';

  if (!(isset($_POST['name']) &&
        (trim($_POST['name']) != '') &&
        isset($_POST['surname']) &&
        (trim($_POST['surname']) != '') &&
        isset($_POST['birth_date']) &&
        ($_POST['birth_date'] != '')
        )
      )
  {
    outln('user data are not correct');
    return;
  }

  require_once __DIR__ . '\..\connection.php';

  $conn = oop_mysqli_default_connect();

  if (!$conn)
  {
    outln('failed connection');
    return;
  }

  $name = htmlentities($conn->real_escape_string($_POST['name']));
  $surname = htmlentities($conn->real_escape_string($_POST['surname']));
  $birth_date = htmlentities($conn->real_escape_string($_POST['birth_date']));

  $query =
    "INSERT INTO `users` (`name`, `surname`, `birth_date`) VALUES " .
    "('$name', '$surname', '$birth_date')";

  if ($conn->query($query))
  {
    outln('users was added, sqlstate ' . $conn->sqlstate . ' rows affected: ' . $conn->affected_rows);
  }

  else {

    outln(
      'users was not added, sqlstate: ' .
      $conn->sqlstate . ', error: ' . $conn->error .
      ' query: ' . $query);
  }

  outln('');
  outln('<a href="http://localhost/MySQL/Tables/insert.php">Main</a>');

  $conn->close();

?>
