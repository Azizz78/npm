const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/html");

  fs.readFile("index.html", (err, data) => {

    if (err) {
      res.write("File not found");
      res.end();
      return;
    }

    res.write(data);
    res.end();
  });

});

let Port = 6003;

server.listen(Port, () => {
  console.log(`server running on http://localhost:${Port}`);
});