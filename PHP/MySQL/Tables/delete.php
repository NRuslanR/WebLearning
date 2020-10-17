<?php

  require_once __DIR__ . '\..\..\output_utils.php';
  
  if (!isset($_GET['id']))
  {
    http_response_code(400);
    outln('incorrect user input to delete');
    return;
  }

  require_once __DIR__ . '\..\connection.php';

  $conn = oop_mysqli_default_connect();

  if (!$conn)
  {
    outln('connection failed');
    return;
  }

  $user_id = htmlentities($conn->real_escape_string($_GET['id']));

  $result = $conn->query("DELETE FROM users WHERE id=$user_id");

  if (!$result)
  {
    http_response_code(500);
    outln('user deleting was failed');
    $conn->close();
    return;
  }

  if ($conn->affected_rows == 0)
  {
    http_response_code(404);
    outln("user to deleting not found");
    $conn->close();
    return;
  }

  outln("user data was deleted");
  outln('');
  out("<a href='http://localhost/MySQL/Tables/insert.php'>Main</a>");

?>
