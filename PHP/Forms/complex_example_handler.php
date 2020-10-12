<?php

  if (!isset($_POST['name']) || trim($_POST['name']) == '')
  {
    echo 'Не указано имя поступающего';
    return;
  }

  if (!isset($_POST['edu_form']))
  {
    echo 'Не указана форма обучения';
    return;
  }

  if (!isset($_POST['courses']))
  {
    echo 'Не выбраны курсы обучения';
    return;
  }

  $name = $_POST['name'];
  $edu_form = $_POST['edu_form'];
  $hostel = isset($_POST['hostel']) ? 'да' : 'нет';
  $courses = $_POST['courses'];
  $comment = isset($_POST['comment']) ? $_POST['comment'] : '';

  echo 'Ваше имя: ' . $name . "<br/>";
  echo 'Форма обучения: ' . $edu_form . '<br/>';
  echo 'Требуется общежитие: ' . $hostel . '<br/>';

  $coursesString = '';

  foreach ($courses as $course)
  {
    if ($coursesString == '')
      $coursesString = $course;

    else $coursesString .= ', ' . $course;
  }

  echo 'Выбранные курсы: ' . $coursesString . '<br/>';
  echo 'Ваш комментарий: ' . $comment;

?>
