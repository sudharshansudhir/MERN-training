const jwt=require('jsonwebtoken')

exports.auth=async(req,res,next)=>{
    const token=req.headers.authorization
    if(!token || !token.startsWith('Bearer')){
        res.status(400).send({message:"Authorization Failed"})
    }
    try{
    const value=token.split(" ")[1]
    const decoded=jwt.verify(value,process.env.SECRET_KEY)
    req.body.user=decoded.id
    next()
    }
catch(e){
    res.status(400).send({message:"Not authorized token"})
}
    

}