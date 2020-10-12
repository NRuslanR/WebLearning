<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>Заявление на поступление в Университет</h1>
    <form action="complex_example_handler.php" method="post">

      <div>
        <p>Введите имя:</p>
        <input type="text" name="name" />
      </div>

      <div>
        <p>Форма обучения</p>
        <div>
          <input type="radio" name="edu_form" value="Очная" />&nbsp;Очная
        </div>
        <div>
          <input type="radio" name="edu_form" value="Заочная" />&nbsp;Заочная
        </div>
      </div>

      <p>
        Требуется общежитие:&nbsp;
        <input type="checkbox" name="hostel" />
      </p>

      <div>
        <p>Выберите курсы:</p>
        <select name="courses[]" size="4" multiple="true">
          <option value="Philosophy">Philosophy</option>
          <option value="Biology">Biology</option>
          <option value="Software Developing">Software Developing</option>
          <option value="Art">Art</option>
        </select>
      </div>

      <div>
        <p>Краткий комментарий:</p>
        <textarea name="comment" maxlength="200"></textarea>
      </div>

      <input type="submit" name="Send" value="Отправить" />

    </form>
  </body>
</html>
