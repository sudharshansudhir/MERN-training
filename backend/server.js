const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const register=require('./routes/AuthRoutes')
const task=require("./routes/TaskRoutes")
app.use(express.json())
  
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected")
    })
    .catch((e)=>{
        console.log("Error in connecting in MongoDB")
    })


app.use("/user",register)
app.use("/task",task)
app.get("/",(req,res)=>{
    res.send("Hello From Server 1")
})


  
app.listen(7000,()=>{
    console.log("Server Running at port 7000")
})  