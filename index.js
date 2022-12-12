/* let http = require('http');
let fs = require('fs')
let hostname = '127.0.0.1';
let port = 5000;
let server = http.createServer((request,response)=>{
    response.writeHead(200,{
        'content-type' : 'text/html'
    })
    fs.readFile('./index.html', (err,data)=>{
        if(err) throw err;
        response.end(data)

    })
   
})
server.listen(port,hostname ,()=>{
    console.log(`Node js server started at http://${hostname}:${port}`)
})

 */
let http = require('http');
let fs = require('fs')
let hostname = '127.0.0.1'
let port = 3000;
let content = `<h1>welcome to html</h1><h1>my name</h1>`
let file =fs.writeFileSync('./indix.html',content,'utf-8')
let server = http.createServer((request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html'
    })
    fs.readFile('./indi.html','utf-8',(err,data)=>{
        if(err) throw err;
        response.end(data)
    })
})
server.listen(port,hostname,()=>{
    console.log(`Node server started at http://${hostname}:${port}`)
})














