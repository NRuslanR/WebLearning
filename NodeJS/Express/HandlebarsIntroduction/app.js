const express = require("express"),
      expressHbs = require("express-handlebars"),
      hbs = require("hbs"),
      app = express();

app
  .engine("hbs", expressHbs(
    {
      layoutsDir: 'views/layouts',
      defaultLayout: 'layout',
      extname: 'hbs'
    }
  ))
  .set('view engine', 'hbs')
  .set('views', 'views');

hbs.registerPartials(__dirname + "/views/partials");

app
  .get('/contacts/:emailsVisible?', (req, res) => {

    let emailsVisible = req.params['emailsVisible'];

    if (!emailsVisible) {

      emailsVisible = 1;

      console.log('emailsVisible was not specified.');

    }

    res.render(
        "contacts.hbs",
        {
          title: "My Contacts",
          emailsVisible: emailsVisible > 0,
          emails: [ 'brainsort@yandex.ru', 'nruslanr95@gmail.com' ],
          phone: '+7 123 456 78 91'
        }
    );

  })
  .get('/', (req, res) => {

    res.render('home.hbs');

  })
  .listen(3000);
