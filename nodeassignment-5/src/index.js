const { setServers } = require('dns');
let http = require('http');
let url = require('url')
let hostname = '127.0.0.1';
let port = 8081;
let server = http.createServer((request,response)=>{
    
    let url = request.url
    if(url=='/welcome'){
        response.writeHead(200,{
            'content-type': 'text/plain'
        })
        response.end('Welcome to Dominos!')
    } 
    else  if(url=='/contact'){
        response.writeHead(200,{
            'content-type' : 'application/json'
        })
        let details = [{
            phone:'18602100000',
            email:'guestcarddominos@jublfood.com'
        }]
      response.end(JSON.stringify(details))
       // console.log(JSON.stringify(details.phone,details.email))
    }
    else{
        response.writeHead(404,{
            'content-type':'text/plain'
        })
        response.end('This page is not found')
    }

});
server.listen(port,hostname,()=>{
    console.log(`Node js server started at http://localhost:${port}`)
})



/* response.writeHead(200,{
        'content-type' : 'text/plain'
    })
    let url = request.url;
    if(url == '/welcome'){
        response.end('Welcome to Dominos!')
    }
    else{
        response.end('page Not found')
    }
    response.writeHead() */









/* var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  
}

module.exports = httpServer; */