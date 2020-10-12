<?php

  if (isset($_GET['login']) && isset($_GET['password']))
    echo "<h1 style='color: red'>Login - " . $_GET['login'] . ", Password - " . $_GET['password'] . "</h2>";

  else echo "<h1 style='color: green'>Login and Password are not specified";

?>
