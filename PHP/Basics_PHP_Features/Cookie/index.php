<?php

  require_once __DIR__ . '\..\..\output_utils.php';

  if (isset($_COOKIE['document_id']))
    outln("document_id: " . $_COOKIE['document_id']);

  else outln('document_id is not specified');

  if (isset($_COOKIE['employee_id']))
    outln('employee_id: ' . $_COOKIE['employee_id']);

  else outln('employee_id is not specified');

  if (isset($_COOKIE['system_roles']))
  {
    outln('system roles:');

    foreach($_COOKIE['system_roles'] as $name => $value)
      outln("$name => $value");
  }

  else outln('system roles are not specified');
  
?>
