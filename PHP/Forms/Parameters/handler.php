<?php

  if (isset($_POST['name']) && isset($_POST['age']))
  {
    $name = htmlentities($_POST['name']);
    $age = strip_tags($_POST['age']);

    echo "<h2>Name - $name, Age - $age</h2>";
  }

?>
