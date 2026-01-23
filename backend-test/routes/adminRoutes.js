const express=require('express')
const { register } = require('../controllers/AuthController')
const { updateStudent, deleteStudent } = require('../controllers/StudentController')

const router=express.Router()

router.post("/",isAdmin,register)
router.get("/",isAdmin,getAllStudents)
router.patch("/:id",isAdmin,updateStudent)
router.delete("/:id",isAdmin,deleteStudent)