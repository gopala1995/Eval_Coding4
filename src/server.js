

const express = require("express")

const app = express()

app.use(express.json())

const connect = require("./config/db")

const userControlar = require("./controlars/user.controlar")
const submissionControlar = require("./controlars/submission.controlar")
const evvaluationControlar = require("./controlars/evaluation.controlars")

app.use("/user",userControlar)
app.use("/submission",submissionControlar)
app.use("/evaluation",evvaluationControlar)

app.listen(2345,async()=>{
    await connect()
    console.log("listening port from 2345....");
})