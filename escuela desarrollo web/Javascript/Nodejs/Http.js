import http from 'http';
const port = 3000;
const router = (req, res) => {
  res.writeHead(201, {'Content-Type':'text/plain'})
  switch (req.url) {
    case '/main':
      res.write('Hello from main');
      break;
    default:
      res.write('Error 404')
  }
  res.end();
}
http.createServer(router).listen(port);