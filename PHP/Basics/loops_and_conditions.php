<?php

  $a = '22';

  if ($a === 22)
    echo '$a === 22 is true';

  elseif ($a == 22)
    echo '$a == 22 is true';

  else '$a == 22 is false, $a === 2 is false';

  echo '<br/>';

  switch ($a)
  {
    case 22:
      echo 'case 22 worked';
      break;

    case 43:
      echo 'case 43 worked';
      break;

    case 'abc':
      echo "case 'abc' worked";
      break;

    default:
      echo "default worked";
  }

  echo '<br/>$a == 22 ? YES : NO = ' . (($a == 22) ? 'yes' : 'no');

  echo '<br/><table><thead><tr><th>Name</th><th>Author</th><th></th></tr></thead><tbody>';

  for ($i = 1; $i <= 5; ++$i)
  {
    echo '<tr>';
    echo "<td>Name$i</td><td>Author$i</td><td><a href='#'>Change</a><a href='#'>Delete</a></td>";
    echo '</tr>';
  }

?>
