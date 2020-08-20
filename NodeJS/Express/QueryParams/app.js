const express = require("express"),
      app = express();

app.get('/', (req, res) => {

  var user = req.query.user, password = req.query.password;

  console.log(`user: ${user}, password: ${password}`);

  if (user && password)
    res.send(`${user} has password ${password}`);

  else res.send('Fail authentification attempt');

})
.get('/foreach', (req, res) => {

  var content = '';

  console.log(req.query);

  for (var name in req.query)
    content += `<li>${name} = ${req.query[name]}</li>`;

  console.log(content);

  if (content)
    res.send(`<h1>Query String's parameters:</h1><ul style="font-size: 20px; text-decoration: underline;">${content}</ul>`);

  else res.end();

})
.get('/array', (req, res) => {

  var names = req.query.names;

  if (!names) {

    res.end();
    return;

  }

  var options = '';

  for (var name of names)
    options += `<option value="${name}">${name}</option>`;

  if (options !== '')
    res.send(`<select size="1">${options}</select>`);

  else res.end();

})
.get('/user', (req, res) => {

  var user = req.query.user;

  if (!user) {

    res.end();
    return;
  }

  res.send(`<style>.block { padding: 10px; margin: 10px; background: lightgreen; border: 1px solid green; font-weight: bold }</style><div class="block">${user.name}</div><div class="block">${user.age}</div>`);
})
.listen(3000);
