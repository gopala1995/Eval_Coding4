

const express = require("express")

const app = express()

app.use(express.json())

const connect = require("./config/db")

app.listen(2345,async()=>{
    await connect()
    console.log("listening port from 2345....");
})