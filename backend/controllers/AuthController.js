const User =require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    const {name,email,password}=req.body;
    const isUserExist=await User.findOne({email})
    if(isUserExist){
        res.status(400).send({message:"User Email Already exists!"})
    }
    const hashedPassword=await bcrypt.hash(password,10)

    const user=await User.create({
        name,email,password:hashedPassword
    })
    user.save()

    res.status(201).send({user,message:"User created successfully"})

}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const isUserExist=await User.findOne({email})
        if(!isUserExist){
            res.status(400).send({message:"User does not exist"})
        }
        const isPassword=await bcrypt.compare(password,isUserExist.password)
        if(!isPassword){
            res.status(400).send({message:"Password is incorrect"})
        }
        const token=jwt.sign({id:isUserExist._id},process.env.SECRET_KEY,{expiresIn:"1d"})
        res.status(200).send({message:"Logged In successfully",token})

    } 
    catch(e){
        res.status(500).send(e)
    }
}