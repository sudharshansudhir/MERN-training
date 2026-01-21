const Task = require("../models/Task");

exports.tasks=async(req,res)=>{
    const {title,description,status,user}=req.body;
    const isTaskExits=await Task.findOne({title})
    if(isTaskExits){
        res.status(400).send({message:"Task Already exists"})
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