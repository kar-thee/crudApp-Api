const Userinfo = require("../db/db.schemas")

exports.deleteuser = async (req,res) => {
    try{
        await Userinfo.findByIdAndRemove(req.params.id);
        res.send("Deleted")
    }catch(e){
        console.error(e,"Error in deleting")
    }
    
}