const User=require("../models/UserModel")
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs')


exports.register=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        if(!name || !email || !password || !role){
            return res.status(400).send({message:"All fields required"})
        }
        const isUserExist=await User.findOne({email})
        if(isUserExist){
            return res.status(400).send({message:"User already exists"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const createUser=await User.create({name,email,password:hashedPassword,role})
        if(createUser){
            createUser.save()
            return res.status(200).send({message:"User created successfully",createUser})
        }
    }
    catch(e){
        console.log('Registeration Error ->',e)
    }
}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const getUser=await User.findOne({email})
        if(!getUser){
            return res.status(400).send({message:"User does not exist"})
        }
        const verifyPassword=await bcrypt.compare(password,getUser.password)
        if(!verifyPassword){
            return res.status(400).send({message:"Password mismatch, try again"})
        }
        const token=jwt.sign({id:getUser._id},process.env.SECRET_KEY)
        return res.status(200).send({token,userRole:getUser.role,message:"Login Successful"})
    }

    catch(e){
        console.log("Login Error ->",e)
    }
}