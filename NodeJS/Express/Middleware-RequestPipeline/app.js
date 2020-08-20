const express = require("express"),
      app = express();

app.use((req, res, next) => {

  console.log('Middleware 1');
  next();

})
.use("/about", (req, res, next) => {

  res.send('Welcome to Express');
  
  console.log("Middleware 2");

})
.get("/", (req, res) => {

  res.send('<h1>Welcome to Express</h1>');

})
.listen(3000);
