const express = require("express")
const app = express();
require("dotenv").config();


//includefiles
const homeRoute = require('./routes/home.route')



//middlewares 

//1 = parse load from request
app.use(express.json())
//2 = custom middleware
app.use((req,res,next)=>{
    console.log("Hi buddy")
    next();
})

//api call middleware

app.use('/users',homeRoute)




const port = process.env.PORTS || 3002;
app.listen(port,()=>console.log("Connected @ ",port));