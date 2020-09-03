const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

var userSchema =
  new Schema(
    {
      name: String,
      age: Number
    }
  );

mongoose.connect('mongodb://localhost:27017/usersdb', { useNewUrlParser: true });

const User = mongoose.model("User", userSchema);

var user =
  new User(
    {
      name: "Nigmatullin Ruslan",
      age: 25
    }
  );

user
  .save()
  .then(function (savedUser) {

    console.log("Saved user: %j", savedUser);

    mongoose.disconnect();

  })
  .catch((err) => {

    console.log("Error occured: " + err);

    mongoose.disconnect();
  });
