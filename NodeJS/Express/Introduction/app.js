const express = require("express");

const app = express();

app
  .get("/", (request, response) => {

    response.send('<h1>Welcome to NodeJS Express</h1>');

  })
  .get("/about", (req, res) => {

    res.end("<h1>About NodeJS Express</h1>");

  })
  .get("/contacts", (req, res) => {

    res.send('<h1>Contacts to NodeJS Express</h1>');

  })
  .listen(3000);
