<?php

  require_once __DIR__ . "\..\..\output_utils.php";

  $input = 'Мама мыла раму мыла';
  $search = 'мы';

  $position = mb_strpos($input, $search);

  outln("Input: $input");
  outln("Search: $search");
  outln("Pos: $position");
  outln('mb_strrpos(input, search): ' . mb_strrpos($input, $search));

  $upper1 = 'SOME TEXT';
  $upper2 = 'НЕКОТОРЫЙ ТЕКСТ';

  outln("strtolower($upper1) = " . strtolower($upper1));
  outln("mb_strtolower($upper2) = " . mb_strtolower($upper2));

  $len = 'Некоторая строка';

  outln("mb_strlen($len) = " . mb_strlen($len));

  $str = 'Дэт-металл - выражение страдательного мироощущения посредством музыки';

  outln("mb_substr($str, 12, 12) = " . mb_substr($str, 12, 12));

  $old = 'страдательного';
  $new = 'болевопиющего';

  outln("str_replace($old, $new, $str) = " . str_replace($old, $new, $str));

?>
