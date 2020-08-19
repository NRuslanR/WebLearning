var currentDate = new Date();

global.rmGlobal = "ReferencedModule Global";

module.exports.currentDate = currentDate;
module.exports.getGlobalMessage = function() { return global.message; }
