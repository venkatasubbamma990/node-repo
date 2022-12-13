const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

// Import routes
const blogRoute = require('./routes/blog');


//Router MIddlewareslet expre
app.use(bodyParser.json())
app.use(express.json());
app.use('/', blogRoute);
app.get('/',(request,response)=>{
    response.send('Welcome to mongodb')
})

module.exports = app;
