const {writeFileSync} = require('fs');
for(let i=0; i<50; i++) {
    writeFileSync('./content/big.txt',`hello world, this is line ${i}\n`, {flag: 'a'});
}