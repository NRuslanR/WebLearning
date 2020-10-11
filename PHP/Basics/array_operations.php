<?php

  $arr = array(1, 2, 3, 4, 5);

  print_r($arr);

  echo '<br/>$arr is array: ' . is_array($arr);
  echo '<br/>arr size: ' . sizeof($arr) . ', item count: ' . count($arr);

  shuffle($arr);

  echo '<br/>after shuffling:';

  print_r($arr);

  $v1 = 123;
  $v2 = 'str2';
  $v3 = 23.234;

  $compactArr = compact('v1', 'v2', 'v3');

  echo '<br/>compact array: ';

  print_r($compactArr);

  arsort($arr, SORT_STRING);

  echo '<br/>$arr after descending sort:';

  print_r($arr);

  krsort($arr);

  echo '<br/>$arr after descending sort by keys:';

  print_r($arr);

?>
