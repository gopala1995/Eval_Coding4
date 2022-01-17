const mongoose = require("mongoose"),


const submissionsShema = new mongoose.Schema({
    evaluation_id:{type:"ObjectId",required:true},
    answered_by:{type:"ObjectId",required:true},
    status:{type:String,required:true,default:"pending"},
    
})