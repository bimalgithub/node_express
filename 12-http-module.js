const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page!!');
    }else if(req.url === '/about'){
        res.end('Here is our short story.');
    } else {
        res.end(`<h1>OOPS!!</h1>
            <p>Page not found</p>
            <a href='/'>back home</a>`);
    }
})

server.listen(5000);