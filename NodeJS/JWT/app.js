require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser');

const app = express();

const { login, refresh } = require('./authentication');

app.use(cookieParser());
app.use(bodyParser.json());

const { verify } = require('./middleware');

app.post('/login', login);
app.post('/refresh', refresh);
app.get('/comments', verify, (res, req) => {

    return res.write("JWT-based authorization successfully passed").end();

}).listen(3000, () => console.log('server started'));