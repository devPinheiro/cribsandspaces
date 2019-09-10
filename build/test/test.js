"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require("../api/resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

var _app = require("../app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { describe, it, beforeEach } from 'mocha';
_chai2.default.should();

var expect = _chai2.default.expect;

_chai2.default.use(_chaiHttp2.default);

var token = void 0;
var blogId = void 0;
var blogSlug = void 0; // Reset user model before each test

describe('Create Account, Login and Get Token', function () {
  beforeEach(function (done) {
    _user2.default.deleteMany({}, function (err) {
      console.log(err);
      done();
    });
  }); // POST create a new user test

  describe('POST register a new user test', function () {
    it('It should allow new users sign up', function (done) {
      // using chai-http plugin
      _chai2.default.request(_app2.default).post('/api/v1/users/signup/').send({
        firstName: "tester",
        lastName: "tester",
        email: "tester@test.com",
        password: "tester",
        role: 2
      }).end(function (err, res) {
        expect(err).to.be.null;
        res.should.have.status(200);
        res.body.should.have.property('success'); //attempt login with user credentials

        _chai2.default.request(_app2.default).post('/api/v1/users/login').send({
          email: "tester@test.com",
          password: "tester"
        }).end(function (err, res) {
          res.should.have.status(200);
          res.body.should.have.property('token');
          res.body.should.be.a('Object');
          token = "Bearer ".concat(res.body.token); // attempt to login using an incorrect endpoint

          _chai2.default.request(_app2.default).post('/api/v1/users/l').send({
            email: "tester@test.com",
            password: "tester"
          }).end(function (err, res) {
            res.should.have.status(404);
            res.body.should.be.a('Object');
          }); // attempt to login using an incorrect credential


          _chai2.default.request(_app2.default).post('/api/v1/users/login').send({
            email: "tester@testerer.com",
            password: "tester"
          }).end(function (err, res) {
            res.should.have.status(404);
            res.body.should.be.a('Object');
            res.body.should.have.property('err');
            done();
          });
        });
      });
    });
  });
}); //let's test the BLOG create endpoint out

describe('POST - create a new note entry', function () {
  it('It should an entry of a note', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/blogs').set('Authorization', token).send({
      "title": " lets test",
      "content": "This is a Note api test"
    }).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(200);
      res.body.should.have.property('title');
      res.body.should.have.property('_id');
      res.body.should.have.property('content');
      blogId = res.body._id;
      blogSlug = res.body.slug;
      done();
    });
  });
  it('Title is required', function (done) {
    _chai2.default.request(_app2.default).post('/api/v1/blogs').set('Authorization', token).send({
      "title": "",
      "content": "This is a Note api test"
    }).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(400);
      done();
    });
  });
}); //let's test the get all blog post entry endpoint out

describe('GET - fetch all unique post entries', function () {
  it('It should fetch all entry of blog posts', function (done) {
    _chai2.default.request(_app2.default).get("/api/v1/blogs").set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(200);
      res.body.should.have.property('docs');
      res.body.should.have.property('pages');
      res.body.should.have.property('total');
      done();
    });
  });
  it('Invalid blog post should throw some errors ', function (done) {
    _chai2.default.request(_app2.default).get("/api/v1/blogs/89").set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(500);
      done();
    });
  });
}); //let's test the get one blog post entry endpoint out

describe('GET - fetch a unique blog post entry', function () {
  it('It should fetch an entry of notes', function (done) {
    _chai2.default.request(_app2.default).get("/api/v1/blogs/".concat(blogSlug)).set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(200);
      res.body.should.have.property('title');
      res.body.should.have.property('_id');
      res.body.should.have.property('content');
      done();
    });
  });
  it('Invalid blog post should throw some errors ', function (done) {
    _chai2.default.request(_app2.default).get("/api/v1/blogs/no_one_else").set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(500);
      done();
    });
  }); // it('Invalid note should throw some errors ', (done) => {
  //     chai.request(app)
  //         .get(`/api/v1/blogs/5`)
  //         .set('Authorization', token)
  //         .end((err, res) => {
  //             expect(err).to.be.null;
  //             res.should.have.status(500);
  //             done();
  //         });
  // });
}); //let's test the update note entry endpoint out

describe('UPDATE - modifies a unique blog post entry', function () {
  it('It should modify an entry of posts', function (done) {
    _chai2.default.request(_app2.default).put("/api/v1/blogs/".concat(blogId)).set('Authorization', token).send({
      "title": "Second test",
      "content": "This is a Note api test"
    }).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(200);
      res.body.blog.should.have.property('title');
      res.body.blog.should.have.property('_id');
      res.body.blog.should.have.property('content');
      done();
    });
  });
  it('Invalid post should throw some errors due to wrong id ', function (done) {
    _chai2.default.request(_app2.default).put("/api/v1/blogs/5bd85e98a07f968a88e68814").set('Authorization', token).send({
      "title": "Second test",
      "content": "This is a blog api test"
    }).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(404);
      res.body.should.have.property('err');
      done();
    });
  });
  it('Invalid blog post should throw some errors ', function (done) {
    _chai2.default.request(_app2.default).put("/api/v1/blogs/".concat(blogId)).set('Authorization', token).send({
      "title": "",
      "content": "This is a Note api test"
    }).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(400);
      done();
    });
  });
}); //let's test the delete blogs post entry endpoint out

describe('DELETE - fetch a unique post entry', function () {
  it('It should delete an entry of posts', function (done) {
    _chai2.default.request(_app2.default).delete("/api/v1/blogs/".concat(blogId)).set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(200);
      res.body.should.have.property('success');
      done();
    });
  });
  it('Invalid blog post should throw some errors due to wrong id ', function (done) {
    _chai2.default.request(_app2.default).delete("/api/v1/blogs/5bd85e98a07f968a88e68814").set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(404);
      res.body.should.have.property('err');
      done();
    });
  });
  it('Invalid note should throw some errors ', function (done) {
    _chai2.default.request(_app2.default).delete("/api/v1/blogs/5").set('Authorization', token).end(function (err, res) {
      expect(err).to.be.null;
      res.should.have.status(500);
      done();
    });
  });
});