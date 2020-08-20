const events = require("events");
const util = require("util");
const eventEmitter = new events.EventEmitter();

const eventName = "onRaised";
const parametrizedEventName = "onParametrizedRaised";

eventEmitter.on(eventName, () => {

  console.log(`First event "${eventName}" handler called`);

});

eventEmitter.on(eventName, () => {

  console.log(`Second event "${eventName}" handler called`);

});

eventEmitter.emit(eventName);

eventEmitter.on(parametrizedEventName, data => {

  console.log(`event "${parametrizedEventName}": ${data}`);

});

eventEmitter.emit(parametrizedEventName, "Custom data");

function User(name, age) {

  var thisAge;

  this.name = name;
  this.setAge = function (age) {

    if (age <= 0)
      this.emit("onAgeInvalid", age);

    else {

      thisAge = age;

      console.log("Correct age setting: " + thisAge);
    }
  }

  this.setAge(age);
  this.getAge = function () { return thisAge; }
}

util.inherits(User, events.EventEmitter);

var user = new User("Ruslan", 25);

console.log(`{ User: ${user.name}, Age: ${user.getAge()}}`);

user.on('onAgeInvalid', function (invalidAge) {

  console.log(`Age ${invalidAge} is invalid`);

});

user.setAge(0);

class NewUser extends events.EventEmitter {

  constructor(name, age) {

    super();

    this.name = name;

    this.setAge(age);
    
  }

  setAge(newAge) {

    if (newAge <= 0)
      this.emit("onAgeInvalid", newAge);

    else {

      this.age = newAge;

      console.log("Correct age setting: " + this.age);

    }
  }

  getAge() { return this.age; }

  toString() { return `{ User: ${this.name}, Age: ${this.getAge()} }`; }
}

var newUser = new NewUser("Dmitry", 37);

console.log(newUser.toString());

newUser.on('onAgeInvalid', invalidAge => {

  console.log(`Age ${invalidAge} is incorrect`);

});

newUser.setAge(-1);
