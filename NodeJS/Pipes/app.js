const fs = require("fs");
const zlib = require("zlib");

var readStream = fs.createReadStream("test_archieving.txt", "utf8"),
    writeStream = fs.createWriteStream("test_archieving.txt.gz");

var gzip = zlib.createGzip();

readStream
  .pipe(gzip)
    .pipe(writeStream)
      .on('finish', function() {

        console.log('Archieving of the file has done.');
        
      });
