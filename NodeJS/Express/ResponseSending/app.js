const express = require("express"),
      app = express();

app
  .get('/', (req, res) => {

    res.send({ url: req.url, data: "Custom Data" });

  })
  .get('/about', (req, res) => {

    res.send('Hello Express');

  })
  .get('/home', (req, res) => {

    res.sendFile(`${__dirname}/index.html`);

  })
  .get('/notfound', (req, res) => {

    res.status(404).send('Endpoint not found');
    
  })
  .listen(3000);
