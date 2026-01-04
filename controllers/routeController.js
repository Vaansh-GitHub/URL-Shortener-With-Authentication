const {nanoid} =require("nanoid")
const {URL}=require("../models/urlModels")

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
module.exports={
    handleGenerateShortUrl,handleFetchAnalytics,
}