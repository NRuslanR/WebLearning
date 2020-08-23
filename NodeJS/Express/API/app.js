const express = require("express"),
      fs = require("fs"),
      app = express();

var jsonParser = express.json();

function getUsers() {

  return JSON.parse(fs.readFileSync("users.json"));

}

function getNextUserId(users) {

  if (users == null || users.length === 0)
    return 1;
    
  var maxUserId = users[0].id;

  for (var i = 1; i < users.length; ++i)
    if (maxUserId < users[i].id)
      maxUserId = users[i].id;

  return maxUserId + 1;

}

function updateUsers(users)
{
  fs.writeFileSync('users.json', JSON.stringify(users));
}

function findUserById(users, userId) {

  for (var user of users)
    if (user.id == userId)
      return user;

  return null;

}

function getUserIndexById(users, userId) {

  for (var i = 0; i < users.length; ++i)
    if (userId == users[i].id)
      return i;

  return -1;

}

app
  .use('/', express.static(__dirname + '/public'))
  .get('/api/v1/users/:id', (req, res) => {

    var requestedUserId = req.params['id'];

    var users = getUsers(),
        requestedUser = findUserById(users, requestedUserId);

    if (!requestedUser)
      res.status(404).send('User not found');

    else res.json(requestedUser);

  })
  .get('/api/v1/users', (req, res) => {

    res.json(getUsers());

  })
  .post('/api/v1/users', jsonParser, (req, res) => {

    var users = getUsers(),
        nextUserId = getNextUserId(users),
        newUser = {
          id: nextUserId,
          name: req.body.name,
          age: req.body.age
        };

    users.push(newUser);

    updateUsers(users);

    res.json(newUser);

  })
  .put('/api/v1/users', jsonParser, (req, res) => {

    var users = getUsers(),
        requestedUser = findUserById(users, req.body.id);

    if (!requestedUser)
    {
      res.status(404).send('User not found');
      return;
    }

    requestedUser.name = req.body.name;
    requestedUser.age = req.body.age;

    updateUsers(users);

    res.json(requestedUser);

  })
  .delete('/api/v1/users/:id', (req, res) => {

    var users = getUsers(),
        removeableUserIndex = getUserIndexById(users, req.params['id']);

    if (removeableUserIndex == -1) {
      res.status(404).send('User not found');
      return;
    }

    var removedUser = users[removeableUserIndex];

    users.splice(removeableUserIndex, 1);

    console.log('User list after deleting: %j', users);

    updateUsers(users);

    res.json(removedUser);

  })
  .listen(3000);
