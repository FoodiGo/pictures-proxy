const request = require('supertest');
const app = require('./index.js');

describe('Proxy Server', () => {
  test('server responds with data from reviews component', (done) => {
    request(app)
      .get('/restaurants/123/reviews')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
  test('server responds with data from photos component', (done) => {
    request(app)
      .get('/pictures/123')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  test('server responds with data from title component', (done) => {
    request(app)
      .get('/title/123')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  test('server responds with data from map component', (done) => {
    request(app)
      .get('/map/123')
      .expect(200)
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });


  test('server responds with data from sidebar component', (done) => {
    request(app)
      .get('/information/123')
      .end((err) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});
