const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'OK' }));
  } else {
    res.writeHead(200);
    res.end('Hola mundo');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
