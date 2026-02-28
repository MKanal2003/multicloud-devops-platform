const http = require("http");

const PORT = 3000;
const VERSION = process.env.VERSION || "DEV";
const HOSTNAME = require("os").hostname();

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>MK Multi-Cloud Platform</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: white;
            text-align: center;
        }
        .container {
            padding-top: 80px;
        }
        .card {
            width: 600px;
            margin: auto;
            padding: 30px;
            border-radius: 15px;
            background: rgba(255,255,255,0.08);
            box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        }
        h1 {
            color: #00ffd5;
            margin-bottom: 10px;
        }
        .status {
            font-size: 22px;
            margin: 20px 0;
            color: #00ff9c;
        }
        .info {
            margin-top: 20px;
            text-align: left;
            line-height: 1.8;
            font-size: 18px;
        }
        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #ccc;
        }
        .badge {
            background: #ff9800;
            padding: 6px 12px;
            border-radius: 8px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="card">
            <h1>🚀 MK Multi-Cloud DevOps Platform</h1>
            <div class="status">Deployment Successful ✔</div>

            <div class="info">
                <b>Version:</b> <span class="badge">${VERSION}</span><br>
                <b>Server Host:</b> ${HOSTNAME}<br>
                <b>Environment:</b> Production<br>
                <b>Cloud Runtime:</b> AWS EC2<br>
                <b>CI/CD:</b> Azure DevOps Pipeline<br>
                <b>Registry:</b> Azure Container Registry<br>
                <b>Deployment Type:</b> Automatic Continuous Deployment
            </div>

            <div class="footer">
                Multi-Cloud Architecture (AWS + Azure) • Built by Mallikarjuna
            </div>
        </div>
    </div>
</body>
</html>
`);
});

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});