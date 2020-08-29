module.exports = async function usersApp(db, users) {

  var newUser = { name: "Nikolay Ermakov", age: 57 };

  users.insertOne(newUser, function (err, result) {

      if (err != null)
      {
        console.log(err);
        return;
      }

      console.log(result.ops);

  });

}
