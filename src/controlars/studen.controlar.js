const express = require("express")

const router = express.Router()
const Student = require("../models/students.models")

router.get("",async(req,res)=>{
   const student = await Student.find().lean().exec()
   return res.status(200).send(student) 
})

// - all students who scored an average of over 7.5 in the 2 evaluations (c2 and c4) will be Deltas
router.get("",async(req,res)=>{
    const student = await Student.find(score<7.5).lean().exec()
    return res.status(200).send(student) 
 })
// - all students who scored an average of over 5 in the 2 evaluations (c2 and c4) will be Charlies
router.get("",async(req,res)=>{
    const student = await Student.find(score<4.5).lean().exec()
    return res.status(200).send(student) 
 })
// - all students who scored an average of over 3.5 in the 2 evaluations (c2 and c4) will be Bravos
router.get("",async(req,res)=>{
    const student = await Student.find(score<3.5).lean().exec()
    return res.status(200).send(student) 
 })
// - all students who scored an average of over 2.5 in the 2 evaluations (c2 and c4) will be Alphas
router.get("",async(req,res)=>{
    const student = await Student.find(score<2.5).lean().exec()
    return res.status(200).send(student) 
 })
// - all students who scored an average of below 2.5 in the 2 evaluations (c2 and c4) will be asked to repeat the unit
// so you need to create an endpoint which can give these counts batch wise

module.exports = router