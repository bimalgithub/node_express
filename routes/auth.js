const express = require('express');
const router = express.Router();
const {people} = require('../data')

router.post('/',(req,res) => {
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    } else {
        res.status(401).send('Please provide a name')
    }
})

module.exports = router;