const { read } = require('fs');
const { stdin } = require('process');
let readline = require('readline');
let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('Plz enter your name',(name)=>{
    console.log("Hello",name);
    rl.close()

})