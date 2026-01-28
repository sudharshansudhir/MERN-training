const User = require("../models/UserModel")
const Student=require("../models/StudentModel")

exports.getStudent=async(req,res)=>{
    try{
        const id=req.params.id
        const getUser=await User.findById(id)
        if(!getUser){
            return res.status(400).send({message:"User does not exist in DataBase"})
        }
        const studentData=await Student.findOne({user:id})
        if(!studentData){
            return res.status(200).send({getUser,message:"User fetched successfully,but no student data exist"})
        }

        return res.status(200).send({getUser,studentData,message:"User Retrieved Successfully"})

    }
    catch(e){
        console.log("Get Student error ->",e)
    }
}

exports.updateStudent=async(req,res)=>{
    try{
        const id=req.params.id
        if(req.body.role=="student"){
            
            const getUser=await User.findByIdAndUpdate(id,{ 
            name:req.body.name,
            email:req.body.email
        },{$set:true})
            const getStudentProfile=await Student.findOne({user:id})
            if(!getStudentProfile){
                const setStudentProfile=await Student.create({
                    user:id,
                    department:req.body.department,
                    isActive:req.body.isActive
                })
                if(!setStudentProfile){
                return res.status(400).send({message:"Failed to update the student profile"})
            }
            }
            else{
                const setStudentProfile=await Student.findByIdAndUpdate(getStudentProfile._id,{
                    department:req.body.department,
                    isActive:req.body.isActive
                },{$set:true})
                if(!setStudentProfile){
                return res.status(400).send({message:"Failed to update the studdent profile"})
            }
            }

        if(!getUser){
            return res.status(400).send({message:"User does not exist in DataBase"})
        }
        return res.status(200).send({message:"User Updated Successfully",getUser})
        }

        else{
            const getUser=await User.findByIdAndUpdate(id,{
            name:req.body.name,
            email:req.body.email,
            role:req.body.role
        },{$set:true})
            const userId=getUser._id
            const getStudentProfiles=await Student.findOne(userId)
            if(getStudentProfiles){
                const updateStudentProfiles=await Student.findByIdAndUpdate(getStudentProfiles._id,{
                    department:req.body.department,
                    isActive:req.body.isActive
                },{$set:true})
                if(!updateStudentProfiles){
                    return res.status(400).send({message:"Student profile is failed to update"})
                }
            }
            else{
                const setStudentProfile=await Student.create({
                    user:id,
                    department:req.body.department,
                    isActive:req.body.isActive
                })
                if(!setStudentProfile){
                return res.status(400).send({message:"Failed to update the student profile"})
            }

            }
        if(!getUser){
            return res.status(400).send({message:"User does not exist in DataBase"})
        }
        return res.status(200).send({message:"User Updated Successfully By Admin",getUser})
        }
        
    }
    catch(e){
        console.log("Student Update Error ->",e)
    }
}

exports.deleteStudent=async(req,res)=>{
    try{

    }
    catch(e){
        
    }
}