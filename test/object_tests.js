process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
chai.use(chaiHttp);

describe('/GET Polygon from each Plane', () => {
  it('it should respond with an object vertices per plane', (done) => {
    chai.request(app)
    .get('/object/polygons')
    .set('Accept', 'application/json')
    .end((err, res) => {
      res.should.have.status(200);
      console.log(res.body);
      done();
    });
  });
});

// describe('/GET Object Vertices', () => {
//   it('it should respond with an object vertices per plane', (done) => {
//     chai.request(app)
//     .get('/object/vertices')
//     .set('Accept', 'application/json')
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body);
//       done();
//     });
//   });
// });


// describe('/POST Create User', () => {
//   it('it should create a User', (done) => {
//     chai.request(app)
//     .post('/api/user/create')
//     .set("Content-Type", "application/json")
//     .send({
//       email_address: "satoshi@ysatoshi.com",
//       firstName:'Satoshi', 
//       lastName: 'Nakamoto',
//       password: 'abcd1234',
//       roles: ["Employee"]
//     })
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });

// describe('/POST Update User', () => {
//   it('it should update a User', (done) => {
//     chai.request(app)
//     .post('/api/user/update')
//     .set("Content-Type", "application/json")
//     .send({
//       id: 3,
//       firstName: 'aaadssjsdlk',
//       lastName: 'ddddd'

//     })
//     .end((err, res) => {
//       res.should.have.status(200);
//       // console.log(res.body)
//       done();
//     });
//   });
// });

// describe('/POST Login User', () => {
//   it('it should allow a user to login, and will send back authorization token', (done) => {
//     chai.request(app)
//     .post('/api/user/login')
//     .set("Content-Type", "application/json")
//     .send({
//       email_address: "satoshi@ysatoshi.com",
//         password: 'abcd1234'})
//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });


//GET AUTHORIZER ACCESS TOKEN 

//https://www.oauth.com/oauth2-servers/authorization/the-authorization-response/
// https://www.oauth.com/oauth2-servers/token-introspection-endpoint/



// describe('/GET  By ID', () => {
//   it('it should GET user by ID', (done) => {
//     chai.request(app)
//     .get('/api/users/user/1')
//     .set('Authorization', 'Bearer ' + token)
//     .set('Accept', 'application/json')

//     .end((err, res) => {
//       res.should.have.status(200);
//       console.log(res.body)
//       done();
//     });
//   });
// });

