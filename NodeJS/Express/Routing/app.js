const express = require("express"),
      app = express();

app.get("/", (req, res) => {

  res.send('<h1>Root</h1>');

})
.get('/about', (req, res) => {

  res.send('<h1>About</h1>');

})
.get('/contacts', (req, res) => {

  res.send('<h1>Contacts</h1>');

})
.get('/bo?k', (req, res) => {

  res.send(`<h1>${req.url}</h1>`);

})
.get('/bo+k', (req, res) => {

  res.send(req.url);

})
.get('/bo+*k', (req, res) => {

  res.send(`<a style="border: 1px solid blue; background: lightblue; padding: 5px;" href="#">${req.url}</a>`)
})
.get('/book(.htm+*)?', (req, res) => {

  res.send(`<ul><li>${req.url}</li><li>${req.method}</li></ul>`);
  
})
.listen(3000);
