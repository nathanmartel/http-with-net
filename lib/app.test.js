const request = require('supertest');
const app = require('./app');

describe('app routes', () => {
  it('retrieves the red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`<html>
  <body>
    <h1>This is red</h1>
  </body>
</html>`);
      });
  });
});
