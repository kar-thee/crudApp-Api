const Userinfo = require("../db/db.schemas")

exports.createuser = async (req,res) =>{
    try{
       await  Userinfo.create({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            username: req.body.username
        }).then(()=> console.log("Created user"))
        res.send("Created")
    }catch(e){
        console.error(e,"error in creating user")
    }


}