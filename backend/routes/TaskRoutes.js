const express= require('express')
const { tasks, readTask, readAll, updateOne, updateOnePatch, deleteTask } = require('../controllers/TaskController')
const { auth } = require('../middlware/authMiddleware')
const router=express.Router()

router.post("/add",auth,tasks)
router.get("/read/:id",auth,readTask)
router.get("/alltask",auth,readAll)
router.put("/update/:id",auth,updateOne)
router.patch("/update/:id",auth,updateOnePatch)
router.delete("/delete/:id",auth,deleteTask)

module.exports=router 