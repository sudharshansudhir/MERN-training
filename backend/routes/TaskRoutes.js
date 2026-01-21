const express= require('express')
const { tasks } = require('../controllers/TaskController')
const router=express.Router()

router.post("/add",tasks)

module.exports=router