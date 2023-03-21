const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../index');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Sample Test', function() {
  it('should return a response with status code 200', function(done) {
    chai.request(app)
      .get('/sample_test')
      .end(function(err, res) {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
