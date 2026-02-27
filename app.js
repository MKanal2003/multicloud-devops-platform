const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    res.write("Hello 👋 Mallikarjuna! Your DevOps Multi-Cloud App is Running\n");
    res.write("Hello 👋 MK! Version 2 deployed automatically 🚀\n");
    res.write("Hello 👋 Devops budyssssssssssssss to the Multi-Cloud App! 🚀......................................................................\n");

    res.end();   // IMPORTANT: end only once
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});