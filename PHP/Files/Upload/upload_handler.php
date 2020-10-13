<?php

  require_once __DIR__ . '\..\..\output_utils.php';

  if (!$_FILES)
  {
    outln('Files to upload not found');
    exit;
  }

  function out_file_metadata($files, $index)
  {
    outln("file_name: " . $files['name'][$index]);
    outln('file type: ' . $files['type'][$index]);
    outln('file size: ' . $files['size'][$index]);
    outln('file tmp path: ' . $files['tmp_name'][$index]);
    outln('file upload error code: ' . $files['error'][$index]);
  }

  $files = $_FILES['files'];

  for($i = 0; $i < count($files['name']); ++$i)
  {
    $file_name = $files['name'][$i];

    if ($files['error'][$i] !== UPLOAD_ERR_OK)
    {
      outln("file " . $file_name . " upload failed with error " . $files['error'][$i]);
      continue;
    }

    out_file_metadata($files, $i);

    if (!file_exists('uploaded'))
      mkdir('uploaded');

    if (move_uploaded_file(
          $files['tmp_name'][$i],
          'uploaded/' . $file_name
        )
      ) outln("file $file_name was moved to uploaded");
      else outln("file $file_name was not moved to uploaded");

    outln('');
  }

?>
