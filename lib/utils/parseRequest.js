module.exports = rawRequest => {
  // const pattern = /(?<method>\w+) (?<path>\/\w*)/;
  // const { method, path } = rawRequest.match(pattern).groups;

  const [method, path] = rawRequest.split('\n')[0].split(' ');
  const [, body] = rawRequest.split('\r\n\r\n');

  return {
    method,
    path,
    body
  };
};
