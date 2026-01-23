const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')

const studentRoutes=require('./routes/studentRoutes')
const authRoutes=require('./routes/authRoutes')

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo DB connected successfully"))
.catch((e)=>console.log("Error in connecting the MONGO DB"))

const app=express()

app.use(cors())
app.use(express.json())

app.use("/auth",authRoutes)
app.use("/student",studentRoutes)

app.get("/",(req,res)=>{
    res.send("Hello from server")
})

app.listen(4000,(req,res)=>{
    console.log("Server running at port 4000")
})