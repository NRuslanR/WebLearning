<?php

  require_once __DIR__ . '\..\output_utils.php';

  $fd = fopen('test.txt', 'w+');

  fwrite($fd, 'Some Content');

  fclose($fd);

  if (mkdir('subdir'))
    outln('subdir has created');

  else outln("subdir hasn't created");

  if (rename('test.txt', 'subdir/test.txt'))
    outln('file "test" was moved');

  else outln('file "test" move error');

  if (copy('subdir/test.txt', 'subdir/test_copy.txt'))
    outln('file test copy was created');

  else outln('file test copy was not created');

  unlink('subdir/test.txt');
  unlink('subdir/test_copy.txt');

  if (rmdir("subdir"))
    outln("subdir was removed");

  else outln("subdir was not removed");

  for ($i = 1; $i <= 5; ++$i)
    mkdir("dir$i");

  $cur_dir = getcwd();

  if (is_dir($cur_dir))
  {
    if ($dh = opendir($cur_dir))
    {
      while(($file = readdir($dh)) !== false)
      {
        if ($file === '.' || $file === '..')
          continue;

        outln(is_dir($file) ? "Directory '$file'" : "Ordinary file: '$file'");
      }

      closedir($dh);
    }
  }

  for ($i = 1; $i <= 5; ++$i)
    rmdir("dir$i");

?>
