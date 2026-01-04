const mongoose=require("mongoose");

const urlSchema = mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    short_url:{
        type:String,
        required:true,
        unique:true,
    },
    times_visited:[{timestamps:{type:Number}}]
},{timestamps:true});

const URL=mongoose.model("url",urlSchema);
module.exports={
    URL,
}