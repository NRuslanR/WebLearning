const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const userSchema =
  new Schema(
    {
      name: {
        type: String,
        default: "Unknown",
        minlength: 3,
        maxlength: 20,
        required: true
      },

      age: {

        type: Number,
        default: 25,
        min: 1,
        max: 100,
        required: true
      }
    }
  );

mongoose.connect('mongodb://localhost:27017/usersdb', { useNewUrlParser: true });

const User = mongoose.model("User", userSchema);

(async () => {

var results = await User.remove({});

console.log('result of the documents removing:');
console.log('%j', results);

var userWithDefaultName = new User({ age: 42 }),
    userWithDefaultAge = new User({ name: "Dmitry" }),
    userWithNotValidName = new User({ name: "a" }),
    userWithNotValidAge = new User({ age: 101 });

async function saveUser(user) {

  return user
          .save()
            .then(savedUser => console.log(savedUser))
            .catch(err => console.log(err));

}

await saveUser(userWithDefaultName);
await saveUser(userWithDefaultAge);
await saveUser(userWithNotValidName);
await saveUser(userWithNotValidAge);

var user1 = new User({ name: "Vitaly", age: 39 }),
    user2 = new User({ name: "Aleksey", age: 28 });

async function createUser(user){

  return user.save()
          .then((res) => console.log(res))
          .catch(err => console.log(err));

}

await createUser(user1);
await createUser(user2);

var users = await User.find({});

console.log('found users:');
console.log('%j', users);

var deletedUser = await User.findOneAndDelete({ name: "Aleksey" });

console.log('deleted user: %j', deletedUser);

var updatedUser = await User.findOneAndUpdate({ name: "Vitaly" }, { age: 42 }, { new: true });

console.log('updated user: %j', updatedUser);

})();
