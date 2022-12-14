const app = require('./app');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
let port = 3000


dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})



app.listen(port,()=>{
    console.log(`Express js server starts at http://localhost:${port}`)
});


//module.exports = app;
//mongodb://localhost/blogdb   
//mongodb+srv://node:<sudha1454>@cluster0.ajeuigj.mongodb.net/?retryWrites=true&w=majority