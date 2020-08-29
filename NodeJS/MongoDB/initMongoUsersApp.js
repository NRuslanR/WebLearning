module.exports = async function initMongoUsersApp(users) {

  var results = await users.insertMany(
    [

      {
        name: "Ruslan",
        age: 25
      },

      {
        name: "Dmitry",
        age: 30
      },

      {
        name: "Sergey",
        age: 45
      },

      {
        name: "Pavel",
        age: 25
      },

      {
        name: "Antony",
        age: 30
      }
    ]
  );

  console.log("Test users:");
  console.log(results);

}
