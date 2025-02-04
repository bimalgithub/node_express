const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
const app = express();

// req => middleware => res
// 1. use vs route
// 2. options - our own / express / third party

// const logger = (req,res,next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date();
//     console.log(method,url,time);
//     next();
// }

// app.get('/', (req,res) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date();
//     console.log(method,url,time);
//     res.send('Home')
// })

// app.get('/', logger, (req,res) => {
//     res.send('Home')
// })

// app.get('/about', logger, (req,res) => {
//     res.send('About')
// })
// app.get('/api/products', logger, (req,res) => {
//     res.send('Products list')
// })
// app.get('/api/items', logger, (req,res) => {
//     res.send('Item list')
// })

app.use(logger);

app.use(morgan('tiny'));

//app.use('/api',logger);

//app.use([logger,authorize]);

app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (req,res) => {
    res.send('About')
})
app.get('/api/products', authorize, (req,res) => {
    res.send('Products list')
})
app.get('/api/items', authorize, (req,res) => {
    res.send('Item list')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})