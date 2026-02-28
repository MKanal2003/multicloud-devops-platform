const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

let ready = false;
setTimeout(() => {
  ready = true;
}, 15000);

// serve files
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {

  // health check
  if (req.url === "/health") {
    res.writeHead(200);
    res.end("OK");
    return;
  }

  // readiness check
  if (req.url === "/ready") {
    if (ready) {
      res.writeHead(200);
      res.end("READY");
    } else {
      res.writeHead(503);
      res.end("NOT READY");
    }
    return;
  }

  // static files
  if (req.url === "/") {
    serveFile(res, "./public/index.html", "text/html");
  } else if (req.url === "/style.css") {
    serveFile(res, "./public/style.css", "text/css");
  } else if (req.url === "/script.js") {
    serveFile(res, "./public/script.js", "application/javascript");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});