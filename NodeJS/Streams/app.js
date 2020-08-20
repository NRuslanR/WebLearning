const fs = require("fs");

let writeableStream = fs.createWriteStream("test.txt");

writeableStream.on('finish', function () {

  console.log('end has executed');

});

writeableStream.write('First suggestion');
writeableStream.write('Second suggestion');
writeableStream.end('Third suggestion');

let readableStream = fs.createReadStream("test.txt");

readableStream
  .on('data', function (data) {

    console.log('data chunk was arrived: ' + data);

  })
  .on('end', function () {

    console.log('all data chunks were arrived');

  })
  .on("error", function (error) {

    console.log("Error occurred during the file data read");

  });

fs.unlinkSync("test.txt");
