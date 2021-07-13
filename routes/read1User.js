const Userinfo = require("../db/db.schemas")

exports.read1user = async (req,res)=>{
    try{
        const data =  await Userinfo.findById(req.params.id)
   res.json(data)
    }catch(e){
        console.error(e,"error in reading 1 user")
    }
   
}