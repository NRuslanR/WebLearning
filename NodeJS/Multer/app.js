const express = require("express"),
      multer = require("multer"),
      app = express();

var fileFilter = (req, file, cb) => {

    cb(null, file.mimetype === 'text/plain');

};

var storageConfig = multer.diskStorage({
  destination: (req, file, cb)  => {

    cb(null, "uploads");

  },

  filename: (req, file, cb) => {

    cb(null, file.originalname + '_' + Date.now());

  }
});

app
  .use(express.static(__dirname))
  .use(multer({ storage: storageConfig, fileFilter: fileFilter }).single('file'))
  .post('/upload', (req, res) => {

    if (req.file == null)
    {
      res.status(500).send('<h3>File upload error occurred</h3>');
      return;
    }

    console.log(req.file);

    res.status(200).send('<h3 style="color:red">File upload success</h3>')

  })
  .listen(3000);
