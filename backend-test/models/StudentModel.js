const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    department:{
        type:"String"
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

exports.module=mongoose.model("Student",studentSchema)