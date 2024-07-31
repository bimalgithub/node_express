const authorize = (req,res,next) => {
    const {token} = req.query;
    if(token === 'secret123'){
        req.token = token;
        console.log('Authorization success');
        next();
    } else {
        console.log('Authorization failed');
        res.status(401).send('Unauthorized');
    }
    
}

module.exports = authorize;