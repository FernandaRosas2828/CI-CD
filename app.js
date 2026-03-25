const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    res.end('OK');
  } else {
    res.writeHead(200);
    res.end('Hola CI/CD funcionando');
  }
});

server.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
