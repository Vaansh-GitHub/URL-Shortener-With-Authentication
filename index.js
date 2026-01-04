const express=require("express");
const {connectMongoDb}=require("./connection");
const urlRouter= require("./routes/urlRoutes")
const staticRouter= require("./routes/staticRoutes")
const {URL}=require("./models/urlModels")
const path=require("path");

const app=express();
const PORT=8000;
//Making Connections to DB
connectMongoDb("mongodb://127.0.0.1:27017/short-url");

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use("/url",urlRouter);
app.use("/",staticRouter);
app.get("/:id", async (req,res)=>{
    const short_url=req.params.id;
    const result=await URL.findOneAndUpdate({short_url},{
        $push:{
            times_visited:{timestamps:Date.now()}
        }})
    res.redirect(result.url);
})//I have written this get request here as because if i add it in urlRoutes it will be shown as /url/:id which has no request here

app.listen(PORT,()=>{console.log('Server started at PORT',PORT);});