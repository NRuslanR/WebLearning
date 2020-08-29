module.exports = async function app(db, users) {

  var newUsers = [
    {
      name: "Valery",
      age: 29
    },
    {
      name: "Alex",
      age: 21
    },
    {
      name: "Tatyana",
      age: 45
    }
  ];

  users.insertMany(newUsers, (err, results) => {

    if (err != null) {
      console.log(err);
      return;
    }

    console.log(results);

  });

  users.find().toArray((err, results) => {

      if (err != null)
      {
        console.log(err);
        return;
      }

      console.log("find example:");

      console.log(results);
  });

  users.find({ name: "Valery" }).toArray((err, results) => {

    if (err != null) {

      console.log(err);
      return;
    }

    console.log("find with filter expression by valery");

    console.log(results);

  });

}
