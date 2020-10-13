<?php

  require_once __DIR__ . '\..\output_utils.php';

  $fd = fopen('test', 'w');

  if ($fd === false)
  {
    outln('"test" file open failed');
    exit;
  }

  for($i = 1; $i <= 10; ++$i)
    fwrite($fd, "line$i");

  fclose($fd);

  $fd = fopen('test', 'r');

  outln('file lines:');

  while (!feof($fd))
  {
    $line = fgets($fd);

    outln("$line<br/>");
  }

  fseek($fd, 0, SEEK_SET);

  outln('file lines:');

  while (!feof($fd))
  {
    $line = fgets($fd);

    outln("$line<br/>");
  }

  outln("file content: " . file_get_contents('test'));

  fclose($fd);

  unlink('test');
  
?>
