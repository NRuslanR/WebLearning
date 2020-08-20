const express = require("express"),
      app = express();

app.use((req, res, next) => {

  console.log('Middleware 1');
  next();

})
.use((req, res, next) => {

  console.log("Middleware 2");
  next();

})
.get("/", (req, res) => {

  response.send('<h1>Welcome to Express</h1>');

})
.listen(3000);
