<?php

  echo '<h1>Choosen system models:</h1>';

  if (!isset($_POST['system_models']))
    return;
    
  $system_models = $_POST['system_models'];

  echo '<ul>';

  foreach ($system_models as $system_model)
  {
    echo '<li>';
    echo $system_model;
    echo '</li>';
  }

  echo '</ul>';

?>
