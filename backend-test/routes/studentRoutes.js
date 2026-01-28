const express=require('express')
const { isStudent } = require('../middleware/studentMiddleware')
const { getStudent, updateStudent, deleteStudent } = require('../controllers/StudentController')

const router=express.Router()

router.get("/:id",getStudent)
router.patch("/:id",isStudent,updateStudent)
router.delete("/:id",isStudent,deleteStudent)

module.exports=router;