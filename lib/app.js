const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(client => {
  client.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/plain',
        status: '200 OK',
        body: 'hi',
      }));
    } else if(request.path === '/red' && request.method === 'GET') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: `<html>
  <body>
    <h1>This is red</h1>
  </body>
</html>`
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
    } else if(request.path === '/echo' && request.method === 'POST') {
      client.end(createResponse({
        contentType: 'text/html',
        status: '200 OK',
        body: request.body
      }));
    } else {
      // respond 404 page
      client.end(createResponse({ body: 'Not Found', contentType: 'text/plain', status: '404 Not Found' }));
    }
  });
});

module.exports = app;
