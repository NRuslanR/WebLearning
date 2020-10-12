<?php

  require_once __DIR__ . '\..\..\output_utils.php';

  session_start();

  if (isset($_SESSION['id']))
  {
    outln("session_id() = " . session_id());
    outln("session_name() = " . session_name());
    outln("COOKIE['session_name()'] = " . $_COOKIE[session_name()]);
    outln("SESSION['id'] = " . $_SESSION['id']);
    outln("SESSION['name'] = " . $_SESSION['name']);

  }

  else outln('session does not start');

?>
