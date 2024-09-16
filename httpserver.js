const http = require("http");

const port= process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/html');
    res.end('This is server end');
});

server.listen(port, () => {
    console.log(`Server is listen on Port ${port}`)
});

