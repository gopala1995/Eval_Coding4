

const mongoose = require("mongoose"),

const submissionsSchema = new mongoose.Schema({

    evaluation_id:{type:"ObjectId",required:true},
    answered_by:{type:"ObjectId",required:true},
    status:{type:String,required:true,default:"pending"},
    submission_time:{type:Date,required:true},
    score:{type:Number,required:false},
    assessed_by:{type:"ObjectId",required:false},
    submission_link:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("submission",submissionsSchema)