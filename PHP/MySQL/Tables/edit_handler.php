<?php

  require_once __DIR__ . '\..\connection.php';
  require_once __DIR__ . '\..\..\output_utils.php';

  $conn = oop_mysqli_default_connect();

  if (!$conn)
  {
    http_response_code(500);
    outln('connection failed');
    return;
  }

  $user_id = htmlentities($conn->real_escape_string($_POST['id']));
  $user_name = htmlentities($conn->real_escape_string($_POST['name']));
  $user_surname = htmlentities($conn->real_escape_string($_POST['surname']));
  $user_birth_date = htmlentities($conn->real_escape_string($_POST['birth_date']));

  $result =
    $conn->query("UPDATE users SET name='$user_name', surname='$user_surname', birth_date='$user_birth_date' WHERE id='$user_id'");

  if (!$result) {

    http_response_code(500);
    outln("update failed, error: " . $conn->error);
    $conn->close();
    return;
  }

  if ($conn->affected_rows == 0)
  {
    http_response_code(404);
    outln("user not found or data up to date");
    $conn->close();
    return;
  }

  outln('user info was updated');
  outln('');
  out("<a href='http://localhost/MySQL/Tables/insert.php'>Main</a>");

  $conn->close();

?>
