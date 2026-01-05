const express =require("express");
const {handleLogin} =require("../controllers/routeController")
const router = express.Router();

router.post("/",handleLogin);
router.get("/",(req,res)=>{
    return res.render("login");
});

module.exports=router;