const http = require("http");

http
  .createServer(
    function (request, response) {

      console.log("NodeJS, Nodemon learning, Hello !");
      response.end("NodeJS, Nodemon learning, Hello !");

    }
  )
  .listen(3000, "localhost", () => {

    console.log("Listening was beginning");

  });
