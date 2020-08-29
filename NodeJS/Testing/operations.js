module.exports = {

  add: function (x, y) { return x + y; },
  subtract: function (x, y) { return x - y; },
  multiply: function (x, y) { return x * y; },
  divide: function (x, y) { return x / y; },
  multiplyAsync: function (x, y, callback) {

    setTimeout(
      function () {
        callback(x * y);
      },
      1000
    );

  }
}
