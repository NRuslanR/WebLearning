const express = require("express"),
      app = express(),
      os = require("os");

app
  .get("/", function (request, response) {

    response.end("Express framework testing");

  })
  .get("/info", function (request, response) {

    response.end(`Current user: ${os.userInfo().username}`);

  });

app.listen(3000);
