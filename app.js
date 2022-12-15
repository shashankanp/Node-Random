const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome To Webpage");
  res.end();
});

server.listen(5000);
