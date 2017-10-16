var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../app.js')

var should = chai.should()
chai.use(chaiHttp)

describe('it lives', function(){
  it('should say hello world', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200)
        res.body.should.have.property('message')
        res.body.message.should.equal("hello world")
        done()
      })
  })
  it('should say something like a message', done => {
    chai.request(server)
      .get('/msg')
      .end((err, res) => {
        res.should.have.status(201)
        done()
      })
  })
})
