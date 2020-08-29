const init = require("../initMongoUsersApp");

module.exports = async function app(db, users) {

  await init(users);

  results = await users.find().toArray();

  console.log("find:");
  console.log(results);

  results = await users.deleteOne({ name: "Dmitry" });

  console.log("deleteOne:");
  console.log(results);

  results = await users.deleteMany({ age: 25 });

  console.log("deleteMany:");
  console.log(results);

  results = await users.findOneAndDelete({ name: "Sergey" });

  console.log("findOneAndDelete:");
  console.log(results);

  results = await users.find().toArray();

  console.log("find:");
  console.log(results);

}
