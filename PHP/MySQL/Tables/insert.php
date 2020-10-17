<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php

      require_once __DIR__ . '\..\connection.php';
      require_once __DIR__ . '\..\..\output_utils.php';

      $conn = oop_mysqli_default_connect();

      if (!$conn) {
        outln('failed connection to load users info');
        return;
      }

      $user_rows = $conn->query('SELECT * FROM users');

      if (!$user_rows)
      {
        outln('failed to load users, error: ' . $conn->error);
        return;
      }

      if ($user_rows->num_rows > 0)
      {
        out('<table><thead><tr><th>id</th><th>name</th><th>surname</th><th>birth_date</th><th></th></tr></thead>');
        out('<tbody>');

        $fields = $user_rows->fetch_fields();

        while ($user_row = $user_rows->fetch_row())
        {
          out('<tr>');
          out("<td>$user_row[0]</td>");
          out("<td>$user_row[1]</td>");
          out("<td>$user_row[2]</td>");
          out("<td>$user_row[3]</td>");
          out("<td><a href='http://localhost/MySQL/Tables/edit.php?" . $fields[0]->name . '=' . "$user_row[0]'>Edit</a>");
          out("&nbsp;&nbsp;<a href='http://localhost/MySQL/Tables/delete.php?" . $fields[0]->name . '=' . "$user_row[0]'>Delete</a></td>");
          out("</tr>");
        }

        out('</tbody>');
        out('</table>');
        out('');
      }
      
      $user_rows->close();
      $conn->close();

    ?>

    <form method="post" action="insert_handler.php">
      <p>
        <label>Name:</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Surname:</label>
        <input type="text" name="surname" />
      </p>
      <p>
        <label>Birth Date:</label>
        <input type="date" name="birth_date" />
      </p>
      <p>
        <input type="submit" value="Add" />
    </form>
  </body>
</html>
