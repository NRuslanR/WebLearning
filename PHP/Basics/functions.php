<?php

  function getFibonacci($n)
  {
    return
      $n < 0 ? NULL :
        $n < 2 ? $n :
          getFibonacci($n - 1) + getFibonacci($n - 2);
  }

  function getFactorial(&$n)
  {
    if ($n < 0)
      $n = NULL;

    elseif ($n == 0)
      $n = 1;

    elseif ($n >= 3) {

      $tmp = $n;

      for ($i = 2; $i < $tmp; ++$i)
        $n *= $i;
    }
  }

  echo 'fibonacci(30) = ' . getFibonacci(30);

  $n = 17;

  getFactorial($n);

  echo '<br/>factorial(17) = ' . $n;

?>
