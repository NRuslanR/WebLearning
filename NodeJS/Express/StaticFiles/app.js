const express = require("express"),
      app = express();

app
  .use('/', express.static(__dirname + '/public'))
  .get('/', (req, res) => {

    res.send('<h1 style="color:red">Welcome to Home Page</h1>');

  })
  .listen(3000);
