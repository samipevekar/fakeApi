const express=require("express")
const app=express()
const cors=require("cors")

const api=require("./data.json")


const port=80
app.use(cors())



app.get("/",(req,res)=>{
    res.send("sami pevekar")
})

app.get("/service",(req,res)=>{
    res.send(api)

})


app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})