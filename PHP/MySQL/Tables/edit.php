<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Edit user</title>
  </head>
  <body>
    <?php

      require_once __DIR__ . '\..\connection.php';
      require_once __DIR__ . '\..\..\output_utils.php';

      if (!isset($_GET['id']))
      {
        http_response_code(400);
        outln('user input is not correct');
        return;
      }

      $conn = oop_mysqli_default_connect();

    ?>

    <?php

      $user_id = htmlentities($conn->real_escape_string($_GET['id']));
      $user_rows = $conn->query("SELECT * FROM users WHERE id=$user_id");

      if (!$user_rows || ($user_rows->num_rows != 1))
      {
        http_response_code(404);
        outln('user not found');
        $conn->close();
        return;
      }

      $fields = $user_rows->fetch_fields();
      $user_row = $user_rows->fetch_row();

      out('<form method="post" action="edit_handler.php">');
      out("<p>");
      out("<label>Name:</label>");
      out("<input type='text' name='name' value='" . $user_row[1] . "' />");
      out("</p>");
      out("<p>");
      out("<label>Surname:</label>");
      out("<input type='text' name='surname' value='" . $user_row[2] . "' />");
      out("</p>");
      out("<p>");
      out("<label>Birth Date:</label>");
      out("<input type='date' name='birth_date' value='" . $user_row[3] . "' />");
      out("</p>");
      out("<p>");
      out("<input type='hidden' name='" . $fields[0]->name . "' value='$user_row[0]' />");
      out("<input type='submit' value='Save' />");
      out("</form>");

      $user_rows->close();
      $conn->close();

    ?>

  </body>
</html>
