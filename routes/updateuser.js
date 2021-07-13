const Userinfo = require("../db/db.schemas")

exports.updateuser = async (req,res) =>{
try{
   await Userinfo.findByIdAndUpdate(req.params.id,{ 
        $set:{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        username: req.body.username
            }
        })
    res.send("Updated")
}catch(e){
    console.error(e,"Error in updating user data")
}
}