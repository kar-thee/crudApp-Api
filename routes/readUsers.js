const Userinfo = require("../db/db.schemas")

exports.readUsers = async (req,res) => {
    try{
        const data = await Userinfo.find()
        res.json(data)
    }catch(e){
        console.error(e,"error in reading all users")
    }
    
}

