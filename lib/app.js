const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    // app.post('/red', () => ) for create
    // app.get('/red', () => {}) for get a thing
    if(request.path === '/red' && request.method === 'GET') {
      // res.send()
      client.end(createResponse({
        body: `<html>
  <body>
    <h1>This is red</h1>
  </body>
</html>`,
        contentType: 'text/html',
        status: '200 OK'
      }));
    } else if(request.path === '/blue' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `<html>
  <body>
    <h1>This is blue</h1>
  </body>
</html>`
      }));
    } else if(request.path === '/green' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `<html>
  <body>
    <h1>This is green</h1>
  </body>
</html>`
      }));
    } else {
      // respond 404 page
      client.end(createResponse({ body: 'Not Found', contentType: 'text/plain', status: '404 Not Found' }));
    }
  });
});

module.exports = app;
