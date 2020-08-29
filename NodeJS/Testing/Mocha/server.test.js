const server = require("./server"),
      request = require("supertest"),
      assert = require("assert");

describe("Express Server Tests", function() {
  
  it('Server should be return "message" for the root route', function (done) {

    request(server)
      .get('/')
      .expect('message')
      .end(done);

  })

  it('Server should be return "404 (Not Found)" for the route "/error"',
  function (done) {

    request(server)
      .get('/error')
      .expect(404)
      .expect('Not Found')
      .end(done);

  })

  it('Server should be return "{ name: "Ruslan", age: 25 }" for the route "/user"',
  function (done) {

    request(server)
      .get('/user')
      .expect(function (response) {

        assert.deepEqual(response.body, { name: "Ruslan", age: 25 });

      })
      .end(done);

  })

});
