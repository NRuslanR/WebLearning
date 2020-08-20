const http = require("http");

http
  .createServer(function (request, response) {

    console.log('url: ' + request.url);
    console.log('method: ' + request.method);

    for (var name in request.headers)
      console.log(`${name}: ${request.headers[name]}`);

    if (request.url === "/forwarding")
    {
      response.statusCode = 302;
      response.statusMessage = "Temporary Forwarding";
      response.setHeader("Location", "/about");
    }

    else {

      response.writeHead(
        200,
        "Successfully request handled",
        {
          UserId: 12,
          'Content-Type': 'text/html; charset=utf-8'
        }
      );

      response.write('<html>');
      response.write('<body>');

      if (request.url === '/' || request.url === '/home')
        response.write('<h1>Welcome to Home NodeJS</h1>');

      else if (request.url === '/about')
        response.write('<h3>About NodeJS</h3>');

      response.write('</body>');
      response.write('</html>');

    }

    response.end();

  })
  .listen(3000);
