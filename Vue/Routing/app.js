const http = require('http'),
        fs = require('fs'),
        nodeName = process.argv[0],
        appName = process.argv[1],
        pagePath = process.argv[2];

process.argv.forEach(
    (val, idx) => console.log(`${idx + 1}: ${val}`)
);

http.createServer(
    (req, res) => {

        fs.readFile(pagePath, (err, data) => {

            if (err) 
            {
                res.statusCode = 500;
                res.statusMessage = "Error page reading";
                res.end("Error index.html reading");
            }

            else res.end(data);
        })

    }
)
.listen(3000);