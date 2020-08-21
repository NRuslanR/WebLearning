const express = require("express"),
      app = express();

var routeParamsFunc = (params) => {

  var routeParamsOptions = '';

  for (var paramName in params)
    routeParamsOptions += `<option>${paramName} = ${params[paramName]}</option>`;

  if (routeParamsOptions === '')
    return null;

  else return `<select size="${params.length}">${routeParamsOptions}</select>`;

}
app.get('/products/:productId', (req, res) => {

  res.send(routeParamsFunc(req.params));

})
.get('/categories/:categoryId/products/:productId', (req, res) => {

  res.send(routeParamsFunc(req.params));

})
.get('/customers/:customerId.:ext', (req, res) => {

  res.send(routeParamsFunc(req.params));

})
.get('/', (req, res) => { res.send(routeParamsFunc(req.params)); })
.listen(3000);
