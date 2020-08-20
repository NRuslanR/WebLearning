const http = require("http"),
      fs = require("fs");

http
  .createServer(
      function (request, response) {

        console.log(`Request url: ${request.url}`);

        var filePath = request.url.substr(1);

        console.log(`Request page: ${filePath}`);

        fs.access(filePath, fs.constants.R_OK, function (err) {

            if (err) {

              response.statusCode = 404;
              response.statusMessage = 'Page Not Found';

              response.end(`Page "${filePath}" not found`);
            }

            else {

              fs.createReadStream(filePath).pipe(response);

            }
        });

      }
  )
  .listen(3000);
