const express = require('express')
const studentdata = require('./InitialData')
const mongoose = require('mongoose')
const Student = require('./model')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost/blogdb",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

// Parse JSON bodies (as sent by API clients)

// your code goes here

app.get('/',(request,response)=>{
    response.send('welcome to expresss')
})
app.get('/api/student',async (request,response)=>{
    try{
        let student = await Student.find();
        response.json({
            status:'suceess',
            student:student
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
}) 
app.get('/api/student/:id',async (request,response)=>{
    try{
        let student = await Student.find({_id:request.params.id});
        response.json({
            status:'suceess',
            student:student
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
}) 
app.post('/api/student', async (request,response)=>{
    try{
        let student = await Student.create(studentdata)
        response.json({
            status:'success',
            student:student
        })
    }
    catch(e){
        response.status(400).json({
            status:'failure',
            message:e.message
        })
    }
})
app.put('/api/student/:id', async (request,response)=>{
    try{
        let student = await Student.updateOne({_id:request.params.id},{$set:{name:request.body.name}})
        response.json({
            status:'success',
            student:student
        })
    }
    catch(e){
        response.status(400).json({
            status:'failure',
            message:e.message
        })
    }
})
app.delete('/api/student/:id',async (request,response)=>{
    try{
        let student = await Student.deleteMany({_id:request.params.id});
        response.json({
            status:'suceess',
            student:student
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
}) 

app.listen(port, () => console.log(`Node js server started at http://localhost:${port}`))

//module.exports = app;   