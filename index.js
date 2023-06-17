const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.url === "/" || req.url === "") {
      fs.readFile("index.html", (error, data) => {
        if (error) {
          return console.log(error);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/about") {
      fs.readFile("about.html", (error, data) => {
        if (error) {
          return console.log(error);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact") {
      fs.readFile("contact.html", (error, data) => {
        if (error) {
          return console.log(error);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", (error, data) => {
        if (error) {
          return console.log(error);
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }).listen(8080);