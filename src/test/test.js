// import { describe, it, beforeEach } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import User from '../api/resources/user/user.model';
import app from '../app';

chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

let token;
let blogId;
let blogSlug;

// Reset user model before each test
describe('Create Account, Login and Get Token', ()=> {
   beforeEach((done) => {
      User.deleteMany({}, (err) => {
         console.log(err);
         done();
      });
   }); 

  // POST create a new user test
  describe('POST register a new user test', () => {
     it('It should allow new users sign up', (done) => {
        // using chai-http plugin
        chai.request(app)
        .post('/api/v1/users/signup/')
        .send({
            firstName: "tester",
            lastName: "tester",
            email: "tester@test.com",
            password: "tester",
            role: 2
        })
        .end((err, res) => {      
          expect(err).to.be.null;
          res.should.have.status(200);
          res.body.should.have.property('success');

          //attempt login with user credentials
          chai.request(app)
          .post('/api/v1/users/login')
          .send({
              email: "tester@test.com",
              password: "tester"
           })
           .end((err, res) => {  
               res.should.have.status(200);
               res.body.should.have.property('token');
               res.body.should.be.a('Object');
               token = `Bearer ${res.body.token}`;
                    
                  // attempt to login using an incorrect endpoint
                  chai.request(app)
                      .post('/api/v1/users/l')
                      .send({
                          email: "tester@test.com",
                          password: "tester"
                      })
                      .end((err, res) => {
                          res.should.have.status(404);
                          res.body.should.be.a('Object');                        
                         
                      })

                    // attempt to login using an incorrect credential
                    chai.request(app)
                        .post('/api/v1/users/login')
                        .send({
                            email: "tester@testerer.com",
                            password: "tester"
                        })
                        .end((err, res) => {
                            res.should.have.status(404);
                            res.body.should.be.a('Object');
                            res.body.should.have.property('err');
                            done();
                        })
                   })
                })
            })         
        });        
     });



//let's test the BLOG create endpoint out
describe('POST - create a new note entry', () => {
    it('It should an entry of a note', (done) => {
        chai.request(app)
            .post('/api/v1/blogs')
            .set('Authorization', token)
            .send({
                "title": " lets test",
                "content": "This is a Note api test"
            })
            .end((err, res) => {
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
    it('Title is required', (done) => {
        chai.request(app)
            .post('/api/v1/blogs')
            .set('Authorization', token)
            .send({
                "title": "",
                "content": "This is a Note api test"
            })
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(400);
                done();
            });
    });
});

//let's test the get all blog post entry endpoint out
describe('GET - fetch all unique post entries', () => {
    it('It should fetch all entry of blog posts', (done) => {
        chai.request(app)
            .get(`/api/v1/blogs`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.have.property('docs');
                res.body.should.have.property('pages');
                res.body.should.have.property('total');
                done();
            });
    });
    it('Invalid blog post should throw some errors ', (done) => {
        chai.request(app)
            .get(`/api/v1/blogs/89`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(500);
                done();
            });
    });
});

//let's test the get one blog post entry endpoint out
describe('GET - fetch a unique blog post entry', () => {
    it('It should fetch an entry of notes', (done) => {
        chai.request(app)
            .get(`/api/v1/blogs/${blogSlug}`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.have.property('title');
                res.body.should.have.property('_id');
                res.body.should.have.property('content');
                done();
            });
    });
    it('Invalid blog post should throw some errors ', (done) => {
        chai.request(app)
            .get(`/api/v1/blogs/no_one_else`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(500);
                done();
            });
    });
    // it('Invalid note should throw some errors ', (done) => {
    //     chai.request(app)
    //         .get(`/api/v1/blogs/5`)
    //         .set('Authorization', token)
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             res.should.have.status(500);
    //             done();
    //         });
    // });
});

//let's test the update note entry endpoint out
describe('UPDATE - modifies a unique blog post entry', () => {
    it('It should modify an entry of posts', (done) => {
        chai.request(app)
            .put(`/api/v1/blogs/${blogId}`)
            .set('Authorization', token)
            .send({
                "title": "Second test",
                "content": "This is a Note api test"
            })
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.blog.should.have.property('title');
                res.body.blog.should.have.property('_id');
                res.body.blog.should.have.property('content');
                done();
            });
    });
    it('Invalid post should throw some errors due to wrong id ', (done) => {
        chai.request(app)
            .put(`/api/v1/blogs/5bd85e98a07f968a88e68814`)
            .set('Authorization', token)
            .send({
                "title": "Second test",
                "content": "This is a blog api test"
            })
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(404);
                res.body.should.have.property('err');
                done();
            });
    });
    it('Invalid blog post should throw some errors ', (done) => {
        chai.request(app)
            .put(`/api/v1/blogs/${blogId}`)
            .set('Authorization', token)
            .send({
                "title": "",
                "content": "This is a Note api test"
            })
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(400);
                done();
            });
    });
});

//let's test the delete blogs post entry endpoint out
describe('DELETE - fetch a unique post entry', () => {
    it('It should delete an entry of posts', (done) => {
        chai.request(app)
            .delete(`/api/v1/blogs/${blogId}`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(200);
                res.body.should.have.property('success');
                done();
            });
    });
    it('Invalid blog post should throw some errors due to wrong id ', (done) => {
        chai.request(app)
            .delete(`/api/v1/blogs/5bd85e98a07f968a88e68814`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(404);
                res.body.should.have.property('err');
                done();
            });
    });
    it('Invalid note should throw some errors ', (done) => {
        chai.request(app)
            .delete(`/api/v1/blogs/5`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(err).to.be.null;
                res.should.have.status(500);
                done();
            });
    });
});

