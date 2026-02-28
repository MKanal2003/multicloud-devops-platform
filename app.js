const http = require("http");

const PORT = 3000;
const VERSION = process.env.VERSION || "DEV";
const HOSTNAME = require("os").hostname();

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <!-- Link to external CSS file for styling (optional) -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <form action="/login_endpoint" method="POST">
            <h2>Mallikarjuna Kanal</h2>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Sign In</button>
            <div class="options">
                <a href="/forgot_password">Forgot Password?</a>
            </div>
        </form>
    </div>
</body>
</html>

`);
});

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});