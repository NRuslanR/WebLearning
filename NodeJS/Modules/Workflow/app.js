const rm1 = require("../ReferencedModule"),
      rm2 = require("../ReferencedModule"),
      welcome = require("./Welcome");

console.log('RM1 Current User: ' + rm1.currentUser);

rm2.currentUser = "Dmitry";

console.log("RM2 Current User after update: " + rm2.currentUser);
console.log("RM1 Current User after update: " + rm1.currentUser);

console.log("Welcome module presentation:");

console.log(welcome.getMorningMessage());
console.log(welcome.getEveningMessage());
