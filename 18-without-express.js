const http = require('http');
const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    let url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage)
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Welcome to the About Us page</h1>')
        res.end()
    } else if(url ==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyles)
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})

server.listen(5000);