const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts)
})

// send info for single product
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product) => product.id === 1)

//     res.json(singleProduct)
// })
app.get('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    const singleProduct = products.find((product) => product.id === parseInt(id))
    if(!singleProduct){
        return res.status(404).send('Product does not exist');
    }
    res.json(singleProduct)
})

app.get('api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    console.log("requesting for product review");
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter( (product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
       //return res.status(200).send('No products matched your search')
       return res.status(200).json({success: true, data:[]})
    }
    res.status(200).send(sortedProducts);
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000');
})