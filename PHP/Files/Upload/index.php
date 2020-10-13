<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP - Upload File</title>
  </head>
  <body>

    <form
      name="upload-file-form"
      method="post"
      action="upload_handler.php"
      enctype="multipart/form-data"
    >
      <div>
        <label>File:</label>
        <input type="file" name="files[]" multiple />
      </div>
      <p>
        <input type="submit" value="Upload" />
      </p>
    </form>

  </body>
</html>
