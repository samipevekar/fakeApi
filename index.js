const express=require("express")
const app=express()
const port =process.env.PORT || 80


const apiData=require("./data.json")

app.get("/",(req,res)=>{
    res.send("sami pevekar")
})

app.get("/service",(req,res)=>{
    res.send(apiData)
})

app.listen(port,()=>{
    console.log("server is listeing on port ",port)
})