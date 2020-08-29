const init = require("../initMongoUsersApp");

module.exports = async function app(db, users) {

  await init(users);

  var results =
    await users.updateOne(
      { name: "Ruslan" },
      { $set: { age: 26 } },
      { returnOriginal: false }
    );

  console.log('updateOne:');
  console.log(results);

  results =
    await users.updateMany(
      { age: 30 },
      { $set: { age: 100 } }
    );

  console.log('updateMany:');
  console.log(results);

  results = await users.find().toArray();

  console.log('find:');
  console.log(results);
}
