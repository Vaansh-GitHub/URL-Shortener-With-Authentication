const express =require("express");
const {handleSignUp} =require("../controllers/routeController")
const router = express.Router();

router.post("/",handleSignUp);
router.get("/",(req,res)=>{
    return res.render("signup");
});

module.exports=router;