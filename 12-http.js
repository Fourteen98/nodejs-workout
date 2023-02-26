const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our homepage');
  } else if (req.url === '/about') {
    res.end("Here is our short history");
  }
  res.end(
    `<h1> Ooops! </h2>
    <p> Cant seem to find the page you are looking for </p>
    <a href='/'> Go back to the homepage </a>
    `
  );
})

server.listen(8000);