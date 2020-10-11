<?php

  function f()
  {
    $local = 4;

    echo '<br/>$local = ' . $local . ' within the f()';
  }

  echo '<br/>$local defined outside the f(): ' . isset($local);

  function g()
  {
    static $stat = 0;

    $stat += 1;

    echo '<br/>$stat static = ' . $stat;
  }

  function h()
  {
    global $global;

    $global = 5;

  }

  $global = 'aaa';

  echo '<br/>global $global = ' . $global;

  f();
  g();
  g();
  g();
  h();

  echo '<br/>global $global = ' . $global;

?>
