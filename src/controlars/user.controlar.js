const express = require("express")

const router = express.Router()

const User = require("../models/user.models")

router.post("",async(req,res)=>{
    const user = await User.create(req.body)
    return res.status(201).send(user)
})

router.get("",async(req,res)=>{
    const users = await User.find().lean().exec()
    return res.status(201).send(users)
})

module.exports = router