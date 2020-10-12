<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <form action="checkboxes_handler.php" method="get">
      <div>
        <span>Aristotle</span>&nbsp;
        <input type="checkbox" name="philosophers[]" value="Aristotle" />
      </div>
      <div>
        <span>Platon</span>&nbsp;
        <input type="checkbox" name="philosophers[]" value="Platon" />
      </div>
      <div>
        <span>Socrat</span>&nbsp;
        <input type="checkbox" name="philosophers[]" value="Socrat" />
      </div>
      <input type="submit" value="Handle">
    </form>

    <form action="radio_handlers.php" method="get">
      <div>
        <span>Plant</span>&nbsp;
        <input type="radio" name="entity" value="Plant" />
      </div>
      <div>
        <span>Animal</span>&nbsp;
        <input type="radio" name="entity" value="Animal" />
      </div>
      <div>
        <span>Human</span>&nbsp;
        <input type="radio" name="entity" value="Human" />
      </div>
      <input type="submit" value="Handle" />
    </form>

    <form action="select_handler.php" method="post">
      <select
        caption="Choose a system model..."
        size="4"
        multiple="true"
        name="system_models[]"
      >
        <option value="Static">Static</option>
        <option value="Dynamic">Dynamic</option>
        <option value="Stochastic">Stochastic</option>
        <option value="Chaos">Chaos</option>
      </select>
      <button type="submit">Handle</button>
    </form>

  </body>
</html>
