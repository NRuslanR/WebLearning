const morning = require("./morning");
const evening = require("./evening");

module.exports = {

  getMorningMessage: function() { return morning; },
  getEveningMessage: function() { return evening; }

}
