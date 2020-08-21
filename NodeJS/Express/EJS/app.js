const express = require("express"),
      app = express();

app.set('view engine', 'ejs');

app
  .get('/contacts/:emailsVisible?', (req, res) => {

    let emailsVisible = req.params['emailsVisible'];

    if (!emailsVisible) {

      emailsVisible = 1;

      console.log('emailsVisible was not specified.');

    }

    res.render(
        "contacts",
        {
          title: "My Contacts",
          emailsVisible: emailsVisible > 0,
          emails: [ 'brainsort@yandex.ru', 'nruslanr95@gmail.com' ],
          phone: '+7 123 456 78 91'
        }
    );

  })
  .get('/', (req, res) => {

    res.render(
      'home',
      {
        title: 'Home'
      }
    );

  })
  .listen(3000);
