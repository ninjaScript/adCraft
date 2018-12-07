var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);
// Test to check SingIn request.
describe('/POST SingIn', () => {
	it('it should POST SingIn request return status code equal 200', (done) => {
		// Test data.
    let UserInfo = {
    	phoneNumber: "0786597458",
      password: "password"
    }
    chai.request(server)
    .post('/sign-in')
    .send(UserInfo)
    .end((err, res) => {
    	res.should.have.status(200);
      res.body.should.be.a('object');
      // res.body.should.have.property('errors');
      done();
    });
  });
});


// Test to check SingUp request.
describe('/POST SingUp', () => {
	it('it should POST SingUp responce return status code equal 200 and the success object', (done) => {
		// Test data.
    let UserInfo = {
    	firstName: "Mohammad",
    	lastName: "Rawashdeh",
    	phoneNumber: "0786597458",
      password: "password",
      gender: "male"
    }
    chai.request(server)
    .post('/sign-up')
    .send(UserInfo)
    .end((err, res) => {
    	res.body.should.have.status(200);
      res.body.should.be.a('object');
      // res.body.should.have.property('errors');
      res.body.success.should.have.property('firstName');
      res.body.success.should.have.property('lastName');
      res.body.success.should.have.property('phoneNumber');
      res.body.success.should.have.property('password');
      done();
    });
  });
});

// Test to check GET top ten items request.
describe('GET LatestItems', () => {
  it('it should GET latest ten items', (done) => {
    chai.request(server)
    .get('/latest-items')
    .end((err,res) => {
      res.body.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });
});
