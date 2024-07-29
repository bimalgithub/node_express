//GLOBALS - NO WINDOW !!!
// __dirname - path to the current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__filename);
let i = 0;
setInterval(()=>{
    i++;
    if(i < 10){
    console.log('hello world');
    } else {
        return;
    }
},1000)
