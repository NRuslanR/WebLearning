const express = require("express"),
      bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/user', (req, res) => {

  res.sendFile(`${__dirname}${req.url}.html`);

})
.post('/user', urlencodedParser, (req, res) => {

  if (!req.body) {

    res.sendStatus(400);
    return;

  }

  console.log("Request body: %j", req.body);

  res.send(`User "${req.body.name}" is ${req.body.age} age old`);

})
.get('/', (req, res) => {

  res.sendFile(`${__dirname}${req.url}index.html`);

})
.listen(3000);
