const express = require("express"),
      app = express();

app.get('/', (req, res) => {

  response.send('message');

})
.get('/error', (req, res) => {

  response.status(404).send('Not Found');

})
.get('/user', (req, res) => {

  response.send({ name: "Ruslan", age: 25});
  
})
.listen(3000);

module.exports = app;
