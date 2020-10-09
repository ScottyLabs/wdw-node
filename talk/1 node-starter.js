const http = require("http");

const hostname = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("WDW 2020");
});

server.listen(port, hostname, () => {
  console.log("Server started!");
});
