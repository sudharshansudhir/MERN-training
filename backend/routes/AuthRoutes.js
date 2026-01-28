const {register,login, getAll}=require('../controllers/AuthController')

const express=require('express')
const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/all",getAll)

module.exports=router 