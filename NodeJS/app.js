const http = require('http');

const server =
  http.createServer(function (request, response) {

    response.end('Checking the NodeJS functionality');

  });

  server.listen(3000, "localhost", function() {

    console.log("Server was beginning a listening");

  });
