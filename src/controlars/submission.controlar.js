const express = require("express")

const router = express.Router()

const Submission = require("../models/submissions.model")

router.post("",async(req,res)=>{
    const sub = await Submission.create(req.body)
    return res.status(201).send(sub)
})

router.get("",async(req,res)=>{
    const sub = await Submission.find().lean().exec()
    return res.status(201).send(sub)
})

module.exports = router