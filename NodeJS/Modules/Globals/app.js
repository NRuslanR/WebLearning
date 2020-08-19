const rm = require("./ReferencedModule");

global.message = "Testing Global Message";

console.log(global.rmGlobal);
console.log(rm.getGlobalMessage());
