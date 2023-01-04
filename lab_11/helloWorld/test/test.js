// //Source:  https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/
// var supertest = require("supertest");

// // This agent refers to PORT where program is runninng.
// var server = supertest.agent("http://localhost:3000");

// // UNIT test begin
// describe('GET /', function() {
//       it('respond with html', function(done) {
//          server
//          .get('/')
//          .expect('Content-Type', /html/)
//          .expect(200, done);
//       });
// });

var supertest = require("supertest");
var assert = require('assert');
var fs = require('fs');

var chai = require('chai');
var expect = chai.expect;
chai.use(require('chai-json'));

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe('GET /', function () {
  it('Response validation', function (done) {
    server
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('Output validation', function (done) {
    function testValue(res) {
      if (res.text != '1 + 2 = 3')
        throw new Error('response doesn\'t match')
    }

    server
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect(testValue)
      .end(done)
  });
});

describe('check Json file', function () {
	
  it('Output validation', function (done) {
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 4,
      "y": 4,
      "op": "+"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 20,
      "y": 5,
      "op": "+"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 10,
      "y": 2,
      "op": "-"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 20,
      "y": 4,
      "op": "-"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 4,
      "y": 2,
      "op": "*"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 20,
      "y": 4,
      "op": "*"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 6,
      "y": 2,
      "op": "/"
    })
    expect('./plik.json').to.be.a.jsonFile().and.contain.jsonWithProps({
      "x": 25,
      "y": 5,
      "op": "/"
    })
    done()
  })
})

describe('GET /json/:name', function () {
  it('respond with html', function (done) {
    server
      .get('/json/plik.json')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('Values validation', function (done) {
    server
      .get('/json/plik.json')
      .expect('Content-Type', /html/)
      .expect(200)
      .expect((res) => {
        let match = res.text.match(/(?<=<tr>).*?(?=<\/tr>)/gm)
        for (line in match) {
          let cell = line.match(/(?<=<td>).*?(?=<\/td>)/gm)
          if (cell !== null) {
            assert.equal(eval(cell[0] + cell[1] + cell[2]), cell[3])
          }
        }

      })
      .end(done)
  })
})