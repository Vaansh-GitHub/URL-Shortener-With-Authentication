const {nanoid} =require("nanoid")
const {URL}=require("../models/urlModels")
const {user} = require("../models/userModels")
const {v4:uuidv4} = require("uuid");
const {setUser,getUser}= require("../service/auth")

//This function handles the url given and stores it in  a db
async function handleGenerateShortUrl(req, res) {
    const body=req.body;
    const url=body.url;
    if(!url)
    {
        return res.status(400).json({error:"url must be entered"});
    }
    const id=nanoid(10); 
    await URL.create({
        url:url,
        short_url:id,
        times_visited:[],
    })
    const allUrls= await URL.find({});
    return res.render("home",{
        id:id,
        urls: allUrls
    });
}
//This function fetches the analytics from the Db
async function handleFetchAnalytics(req,res)
{
    const short_url=req.params.id;
    const result=await URL.findOne({short_url});
    return res.json({
        total_clicks:result.times_visited.length,
        analytics:result.times_visited,
    })
}
//This function handles the sign up of the user
async function handleSignUp(req,res)
{
    const body=req.body;
    await user.create({
        username:body.name,
        email:body.email,
        password:body.password,
    })
    return res.redirect("/");
}
//This function handles the login of the user
async function handleLogin(req,res)
{
    const body = req.body;
    const result= await user.findOne({
        email:body.email,
        password:body.password,
    });
    if(!result) return res.render("login",{err:"Wrong Credentials"});
    
    const sessionId=uuidv4();
    setUser(sessionId,result);
    res.cookie("uid",sessionId);
    return res.redirect("/");
}
module.exports={
    handleGenerateShortUrl,handleFetchAnalytics,handleSignUp,handleLogin,
}