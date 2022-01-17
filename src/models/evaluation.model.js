const mongoose = require("mongoose")

const evaluationSchema = new mongoose.Schema({
    title:{type:String,required:true},
    created_by:{tyep:"ObjectId",required:true},
    start_date:{type: Date,required:true},
    end_date:{type:Date,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("evaluation",evaluationSchema)