const router = require('express').Router();
const app = require('../app');
const Blog = require('../models/Blog')
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}));
// Your routing code goes here


/* router.get('/blog',(req,res)=>{
    res.json({
        
    })
}) */

router.get('/blog',async (request,response)=>{
    try{
        let blog = await Blog.find();
        response.json({
            status:'succsess',
            blog:blog
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
})
router.post('/blog',async (request,response)=>{
    
    try{
        let blogs = await Blog.create(request.body);
    blogs.save()
        response.json({
            status:'Success',
            blog:blogs
        })
        console.log(request.body)
    }
    catch(err){
        response.status(500).json({
            status:'failure',
            message:err.message
        })
    }
}) 
router.get('/blog/:id',async (request,response)=>{
    let {id} = request.params
    try{
        let blog = await Blog.find({_id:id});
        response.json({
            status:'succsess',
            blog:blog
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
})
router.put('/blog/:id', async (request,response)=>{
    try{
        let blog= await Blog.updateOne({_id:request.params.id},{$set:{posted_by:request.body.posted_by}});
        response.json({
            status:'succsess',
            blog:blog
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
})
router.delete('/blog/:id',async(request,response)=>{
    try{
        let blog = await Blog.deleteOne({_id:request.params.id},request.body)
        response.json({
            status:'succsess',
            blog:blog
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
})
/* app.get('/blog/:id', async (req,res)=>{
    let id = req.query.id;
    //id = id ? id : 0;

    try {
      let blog = await Blog.find({_id: id });
      res.status(200).send({
        status: true,
        blog:blog,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
})
  
 */

module.exports = router;
/* app.get('/post/:id', async (request,response)=>{
    try{
        let blog = await Blog.updateOne({_id:request.body.id},{$set:{name:request.body.name}});
     blog = await Blog.deleteOne({_id:request.body.id},request.body)
        response.status(200).json({
            status:'succsess',
            blog:blog
        })
    }
    catch(err){
        response.status(405).json({
            status:'failure',
            message:err.message


        })
    }


}) */