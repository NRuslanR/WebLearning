<?php

  $a;

  if (isset($a))
    echo '$a is defined';

  else echo '$a is not defined';

  $a = 10;

  if (isset($a))
  {
    echo '<br/>$a is defined: ' . $a;

    unset($a);

    if (!isset($a))
      echo '<br/>$a is not set now';
  }

?>
