const express = require("express"),
      app = express();

let productsRouter = express.Router();

productsRouter
  .use('/create', (req, res) => {

    res.send('Product created');

  })
  .use('/:productId', (req, res) => {

    res.send('Product ' + req.params['productId']);

  })
  .use('/', (req, res) => {

    res.send('Product List');

  });

app
  .use('/products', productsRouter)
  .use('/', (req, res) => {

    res.sendFile(__dirname + '/' + 'index.html');

  })
  .listen(3000);
