const rm = require("./ReferencedModule");
const os = require("os");
const User = require("./User");

var userName = os.userInfo().username;

console.log(`Resource visit date: ${rm.date}`);
console.log(rm.getMessage(userName));

var user = new User("Ruslan Nigmatullin", 25);

user.printInfo();
