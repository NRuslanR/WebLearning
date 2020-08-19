function User(name, age) {

  this.name = name;
  this.age = age;
  this.printInfo = function () {

    console.log(`{ Name: ${this.name}, Age: ${this.age}}`);

  }
}

module.exports = User;
