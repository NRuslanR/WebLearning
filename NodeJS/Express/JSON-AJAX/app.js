const express = require("express"),
      app = express();

var jsonParser = express.json();

app.post('/user', jsonParser, (req, res) => {

  if (!req.body) {

    res.sendStatus(400);
    return;

  }

  var user = req.body;

  console.log('Request body: %j', req.body);
  
  res.json(req.body);

})
.get('/', (req, res) => {

  res.sendFile(__dirname + '/' + 'index.html');

})
.listen(3000);
