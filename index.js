const express = require("express")
const app = express();
require("dotenv").config();
require("cors");

//includefiles
const homeRoute = require('./routes/home.route')



//middlewares 
app.use(cors());

//1 = parse load from request
app.use(express.json())
//2 = custom middleware
app.use((req,res,next)=>{
    console.log("Hi buddy")
    next();
})

//api call middleware
app.get('/',(req,res)=>res.send("Hi");
app.use('/users',homeRoute)




const port = process.env.PORTS || 3002;
app.listen(port,()=>console.log("Connected @ ",port));
