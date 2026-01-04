const express=require("express");
const {handleGenerateShortUrl,handleFetchAnalytics,}= require('../controllers/routeController')
const router=express.Router();

router.post("/",handleGenerateShortUrl)//A post request at /url
router.get("/analytics/:id",handleFetchAnalytics)//A get request at /url/analytics/:id
module.exports=router;