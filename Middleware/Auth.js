const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const User=require('../Model/User')

const auth = expressAsyncHandler(async(req,res,next)=>{
    try{
        const token= req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const user=await User.findOne({_id:decoded._id})
        if(!user){
            throw Error("Authorized user not found")
        }
        req.user=user
        req.token=token
        next()
    }
    catch(e){
        console.log(e);
        throw Error("Authorization failed")
    }
})

module.exports=auth;