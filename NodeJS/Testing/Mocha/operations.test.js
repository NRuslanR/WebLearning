const operations = require("../operations"),
      assert = require("assert");

describe("Operations Test", function () {

  it("Product 4 and 5 should be 20", function () {

    var expected = 20, actual = operations.multiply(4, 5);

    assert.equal(actual, expected);
  })

  it("Add 4 to 5 should be 9", function () {

    var expected = 9, actual = operations.add(4, 5);

    assert.equal(actual, expected);

  })

  it("Not-passed test. Subtract 5 from 4 should be 0", function () {

    var expected = 0, actual = operations.subtract(4, 5);

    assert.equal(actual, expected);

  })

  it("Async multiply 4 and 5 should be 20", function (done) {

    var expected = 20;

    operations.multiplyAsync(4, 5, function (actual) {

      assert.equal(actual, expected);
      done();

    })
  })

});
