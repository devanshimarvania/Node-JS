const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8005;
const server = http.createServer((req,res) => {
    const parsedURL = url.parse(req.url, true);
    const pathname = parsedURL.pathname;

    let filename = ""
    if (pathname === "/") {
        filename = "./pages/index.html";
    }
    else if (pathname === "/about") {
        filename = "./pages/about.html";
    }
    else if (pathname === "/contact") {
        filename = "./pages/contact.html";
    }
   else if (pathname === "/user") {
        const name = parsedURL.query.name || "Guest";
        fs.readFile("./pages/user.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
            }
            else {
                const html = data.toString().replace("{{name}}", name);
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(html);
            }
        });
        return;
    }
    else if (pathname === "/api/status") {
        const status = {
            success: true,
            status: "Server is Running",
            port: port,
            timestamp: new Date().toISOString()
        };
        fs.readFile("./pages/status.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
            }
            else {
                const html = data.toString().replace("{{status}}", JSON.stringify(status, null, 2));
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(html);
            }
        });
        return;
    }
    else {
        fs.readFile("./pages/404.html", (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(err ? "<h1>404 - Page Not Found</h1>" : data);
        });
        return;
    }
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});