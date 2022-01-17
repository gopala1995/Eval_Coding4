
const express = require("express")
const { Mongoose } = require("mongoose")

const router = express.Router()

const Evaluation = require("../models/evaluation.model")

router.post("",async(req,res)=>{
    try{
        const eval = await Evaluation.create(req.body)
    return res.status(200).send(eval)
    }catch(err){
        console.log(err);
    }
})

router.get("",async(req,res)=>{
    const evals = await Evaluation.find().lean().exec()
    return res.status(201).send(evals)
})

module.exports = router