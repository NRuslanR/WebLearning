const express = require("express"),
      mongo = require("mongodb"),
      MongoClient = mongo.MongoClient,
      ObjectId = mongo.ObjectId,
      app = express();

var jsonParser = express.json();

var mongoClient =
  new MongoClient(
    'mongodb://localhost:27017',
    { useNewUrlParser: true }
  );

var schema;

(async () => {

schema = await mongoClient.connect();

app.locals.users = schema.db('usersdb').collection('users');

async function getUsersAsync(users) {

  return users.find({}).toArray();

}

async function findUserByIdAsync(users, userId) {

  return users.findOne({ _id: new ObjectId(userId) });

}

async function addNewUserAsync(users, newUser) {

  return users.insertOne(newUser).then((result) => result.ops[0]);
}

async function deleteUserAsync(users, userId) {

  return users
            .deleteOne({ _id: new ObjectId(userId) })
              .then((res) => {

                    return (res.deletedCount != null) &&
                            (res.deletedCount == 1);

              });
}

async function updateUserAsync(users, userInfo) {


  return users
              .updateOne(
                { _id: new ObjectId(userInfo.id) },
                { $set: { name: userInfo.name, age: userInfo.age } },
              )
              .then((res) => {

                return res.matchedCount && res.modifiedCount;

              });
}

app
  .use('/', express.static(__dirname + '/public'))
  .get('/api/v1/users/:id', async (req, res) => {

    var requestedUserId = req.params['id'];

    var requestedUser =
      await findUserByIdAsync(req.app.locals.users, requestedUserId);

    if (!requestedUser)
      res.status(404).send('User not found');

    else res.json(requestedUser);

  })
  .get('/api/v1/users', async (req, res) => {

    res.json(await getUsersAsync(req.app.locals.users));

  })
  .post('/api/v1/users', jsonParser, async (req, res) => {

    var newUser = {
          name: req.body.name,
          age: req.body.age
        };

    var addedUser = await addNewUserAsync(req.app.locals.users, newUser);

    res.json(addedUser);

  })
  .put('/api/v1/users', jsonParser, async (req, res) => {

    var requestedUser =
      await findUserByIdAsync(req.app.locals.users, req.body._id);

    if (requestedUser == null)
    {
      res.status(404).send('User not found');
      return;
    }

    requestedUser.name = req.body.name;
    requestedUser.age = req.body.age;

    if (await updateUserAsync(req.app.locals.users, requestedUser) === false)
      res.status(500).send('User was not updated');

    else res.json(requestedUser);

  })
  .delete('/api/v1/users/:id', async (req, res) => {

    var removedUser =
      await findUserByIdAsync(req.app.locals.users, req.params['id']);

    if (removedUser == null) {
      res.status(404).send('User not found');
      return;
    }

    if (await deleteUserAsync(req.app.locals.users, req.params.id) === false)
      res.status(500).send('User was not deleted');

    else res.json(removedUser);

  })
  .listen(3000);

  process.on('SIGINT', () => {

    schema.close();
    process.exit();

  })

})();
