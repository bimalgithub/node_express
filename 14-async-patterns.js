//const {readFile, writeFile} = require('fs').promises;
const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`
        )
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
    
}

// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf8',(err,data) => {
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })

//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));

// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

start();

