const express=require("express");
const {handleGenerateShortUrl,handleFetchAnalytics,}= require('../controllers/routeController')
const router=express.Router();
const {URL}=require("../models/urlModels");

router.post("/",handleGenerateShortUrl)//A post request at /url
router.get("/analytics/:id",handleFetchAnalytics)//A get request at /url/analytics/:id
router.get("/:id", async (req,res)=>{
    console.log("Inside id");
    const short_url=req.params.id;
    const result=await URL.findOneAndUpdate({short_url},{
        $push:{
            times_visited:{timestamps:Date.now()}
        }})
    res.redirect(result.url);
})
module.exports=router;