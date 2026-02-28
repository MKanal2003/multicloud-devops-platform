const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

let ready = false;

// simulate app startup (important for load balancer readiness)
setTimeout(() => {
  ready = true;
}, 15000);

// helper function
function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType + "; charset=utf-8" });
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {

  // Health check (GCP monitoring)
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("OK");
    return;
  }

  // Readiness check (AWS load balancer)
  if (req.url === "/ready") {
    if (ready) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("READY");
    } else {
      res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("NOT READY");
    }
    return;
  }

  // Routing
  if (req.url === "/") {
    serveFile(res, "./public/index.html", "text/html");
  }
  else if (req.url === "/style.css") {
    serveFile(res, "./public/style.css", "text/css");
  }
  else if (req.url === "/script.js") {
    serveFile(res, "./public/script.js", "application/javascript");
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Multi-Cloud DevOps app running on port ${PORT}`);
});