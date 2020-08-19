let currentDate = new Date();

module.exports.date = currentDate;
module.exports.getMessage = function (name) {

  var hour = currentDate.getHours();

  if (hour > 16)
    return "Good evening, " + name;

  if (hour > 10)
    return "Good day, " + name;

  return "Good morning, " + name;

}
