const {user} = require("../models/userModels")
const {setUser,getUser}= require("../service/auth")
function restrictedUserLoginOnly(req,res,next)
{
    const sessionId=req.cookies?.uid;
    console.log(sessionId);
    if(!sessionId) return res.redirect("/login");

    const result=getUser(sessionId);
    console.log(result);
    if(!result) return res.redirect("/login");
    
    next();
}

module.exports={
    restrictedUserLoginOnly,
}