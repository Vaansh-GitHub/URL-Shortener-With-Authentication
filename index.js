const express=require("express");
const {connectMongoDb}=require("./connection");

const urlRouter= require("./routes/urlRoutes")
const staticRouter= require("./routes/staticRoutes")
const signUpRouter=require("./routes/authRoutes");
const loginRouter=require("./routes/loginRoutes");
const cookieParser = require('cookie-parser');
const {restrictedUserLoginOnly}=require("./middlewares/auth")

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
app.use(cookieParser())

//Routes
app.use("/",staticRouter);
app.use("/url",restrictedUserLoginOnly,urlRouter);
app.use("/signup",signUpRouter);
app.use("/login",loginRouter);

app.listen(PORT,()=>{console.log('Server started at PORT',PORT);});