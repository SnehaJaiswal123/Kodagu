const User=require('../Model/User')
const expressAsyncHandler=require('express-async-handler')

const signup=expressAsyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;

    if(!name||!email||!password){
        throw Error("Enter all the fields")
    }

    const userExist=await User.findOne({email})
    if(userExist){
        console.log("User already exist");
        throw Error("User already exist")
        
    }

    const newuser=new User(req.body)
    newuser.save()
    const token=await newuser.generateToken()
    res.send({newuser,token})
})

const login=expressAsyncHandler(async(req,res)=>{
    const {userName,password}=req.body;

    if(!userName||!password){
        throw Error("Enter all the fields")
    }

    const user=await User.findOne({userName})
    console.log(user);
    if(user){
      const passMatched= await user.matchPassword(password)
      if(passMatched){
        res.send(user)
      }
      else{
        throw Error("Invalid Password") 
      }
       
    }
    else{
        throw Error("Invalid Username")
    }

    
})

module.exports={signup,login}
