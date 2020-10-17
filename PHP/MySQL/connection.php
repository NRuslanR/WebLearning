<?php

  $host = 'localhost';
  $database = 'users';
  $user = 'root';
  $password = '123456';

  function mysqli_default_connect()
  {
    global $host, $user, $password, $database;

    return mysqli_connect($host, $user, $password, $database);
  }

  function oop_mysqli_default_connect()
  {
    global $host, $user, $password, $database;

    return new mysqli($host, $user, $password, $database);
  }
?>
