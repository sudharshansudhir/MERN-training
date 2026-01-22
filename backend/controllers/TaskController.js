const Task = require("../models/Task");

exports.tasks=async(req,res)=>{
    const {title,description,status,user}=req.body;
    console.log
    const isTaskExits=await Task.findOne({title})
    if(isTaskExits){
        res.status(404).send({message:"Task Already exists"})
    }
    const newTask=await Task.create({
        title,
        description,
        status,
        user
    })
    newTask.save()
    res.status(200).send({message:"New task is created"})

}

exports.readTask=async(req,res)=>{
    try{
        const id=req.params.id
        const userTask=await Task.findById(id)
        if(!userTask){
            res.status(400).send({message:"No task found for this user"})
        }
        res.status(200).send({message:"Task is retireved",userTask})
    }
    catch(e){
        console.log(e)
    }
}


exports.readAll=async(req,res)=>{
    try{
        const {user}=req.body;
        const allTask=await Task.find({user})
        if(!allTask){
           res.status(400).send({message:"No task found for this user"})
        }
        res.status(200).send({message:"All Task is retireved",allTask})
    }
    catch(e){
        console.log(e)
    }
}

exports.updateOne=async(req,res)=>{
    try{
        const id=req.params.id
        const updateStatus=await Task.findOneAndUpdate({_id:id,user:req.body.user},{
            title:req.body.title,
            description:req.body.description,
            status:req.body.status            
        },{new:true})
        if(updateStatus){
            res.status(200).send({message:"Task updated completely",updateStatus})
        }
        res.status(400).send({message:"No task exist for this user"})
    }
    catch(e){
        console.log(e)
    }
}

exports.updateOnePatch=async(req,res)=>{
    try{
        const id=req.params.id
        const updateStatus=await Task.findOneAndUpdate({_id:id,user:req.body.user},{$set:req.body},{new:true})
        if(updateStatus){
            res.status(200).send({message:"Task updated completely for patch",updateStatus})
        }
        res.status(400).send({message:"No task exist for this user"})
    }
    catch(e){
        console.log(e)
    }
}

exports.deleteTask=async(req,res)=>{
    try{
        const id=req.params.id
        const deleteTask=await Task.findOneAndDelete({"_id":id,"user":req.body.user})
        if(deleteTask){
            return res.status(200).send({message:"Task deleted successfully"})
        }
        return res.status(400).send({message:"Task does not exist"})
    }
    catch(e){
        console.log(e)
    }
}