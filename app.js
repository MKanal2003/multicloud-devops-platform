const http = require("http");

const PORT = 3000;

let ready = false;

// simulate app boot time (database, cache, etc)
setTimeout(() => {
    ready = true;
    console.log("Application READY");
}, 15000); // 15 seconds warmup

const server = http.createServer((req, res) => {

    // Health check (server alive)
    if (req.url === "/health") {
        res.writeHead(200);
        res.end("OK");
        return;
    }

    // Readiness check (server ready to receive traffic)
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

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Multi-Cloud DevOps Platform Running 🚀\nZero Downtime Deployment Active");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});