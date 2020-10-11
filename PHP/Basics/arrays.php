<?php

  $subjects[] = 'table';
  $subjects[] = 'computer';
  $subjects[] = 'radio';
  $subjects[] = 'hands';

  for ($i = 0; $i < count($subjects); ++$i)
    echo "$subjects[$i]<br/>";

  print_r($subjects);

  $arr = array("key1" => "val1", 'key2' => 'val2', "key3" => "val3");

  foreach($arr as $key=>$val)
    echo "<br/>(k, v) = ($key, $val)";

  $companies =
    array(
      "Samsung" =>
        array(
          "Samsung X2RC-232",
          "Sam ZXC-32 A",
          "Sung ATAPI-2"
        ),
      "Nokia" =>
        array(
          "Nokia WEW3-2ds",
          "JsKIA 44-NSW"
        ),
      "Philips" =>
        array(
          "Philips JHW-23SD",
          "F1",
          "P2",
          "P3"
        )
    );

  foreach ($companies as $company=>$products)
  {
    echo "<h3>$company</h3>";
    echo '<ul>';

    foreach ($products as $product)
    {
      echo '<li>';
      echo $product;
      echo '</li>';
    }

    echo '</ul>';
  }
  
?>
