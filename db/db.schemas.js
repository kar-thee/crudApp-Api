const mongoose = require("mongoose")
const schema = mongoose.Schema
require("dotenv").config();

mongoose.connect(process.env.DBURL,{useUnifiedTopology:true,useNewUrlParser: true}).
then(() => console.log("DB connected"))



const userinfo = new schema({
    name: String,
    username: String,
    phone: String,
    email: String 
})

const Userinfo = new mongoose.model("Userinfo",userinfo,'crudcollection')

module.exports = Userinfo;