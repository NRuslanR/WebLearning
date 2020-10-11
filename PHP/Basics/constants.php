<?php

  define('NUMBER', 29);

  echo 'NUMBER = ' . NUMBER;

  echo '<br/>__FILE__ = ' . __FILE__;
  echo '<br/>__LINE__ = ' . __LINE__;
  echo '<br/>__DIR__ = ' . __DIR__;
  echo '<br/>__FUNCTION__ = ' . __FUNCTION__;
  echo '<br/>__CLASS__ = ' . __CLASS__;
  echo '<br/>__METHOD__ = ' . __METHOD__;
  echo '<br/>__NAMESPACE__ = ' . __NAMESPACE__;
  echo '<br/>NUMBER is defined = ' . defined('NUMBER');
  echo '<br/>NUMBER1 is defined = ' . defined('NUMBER1');
  echo '<br/>NUMBER TYPE = ' . gettype(NUMBER);
  echo '<br/>NUMBER is integer = ' . is_integer(NUMBER);

  $a = 10;

  settype($a, 'string');

  echo '<br/>a type = ' . gettype($a);

  $a = 'str';

  echo '<br/>$a = ' . $a;

  $a = 10;

  echo '<br/>$a type = ' . gettype($a) . ', $a = ' . $a; 

?>
