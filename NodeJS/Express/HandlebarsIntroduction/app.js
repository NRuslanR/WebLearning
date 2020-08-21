const express = require("express"),
      expressHbs = require("express-handlebars"),
      hbs = require("hbs"),
      app = express();

app
  .set('view engine', 'hbs')
  .set('views', 'views')
  .set('view options', { layout: 'layouts/layout' });

hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getTime", function () {

    var currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `Current time: ${hours}:${minutes}:${seconds}`;

});

hbs.registerHelper('createStringList', function (arr) {

    var items = '';

    for (var item of arr)
      items += `<li>${item}</li>`;

    return new hbs.SafeString(`<ul>${items}</ul>`);

});

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

    res.render(
      'home.hbs',
      {
        title: 'Home',
        frameworks: [
          'Node.js',
          'Express',
          'AngularJS',
          'Vue.js',
          'React.js'
        ]
      }
    );

  })
  .listen(3000);
