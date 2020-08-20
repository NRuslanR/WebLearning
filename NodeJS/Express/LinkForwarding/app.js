const express = require("express"),
      app = express();

app.use('/', (req, res) => {

  res.redirect("http://msdn.com");

});

app.listen(3000);
