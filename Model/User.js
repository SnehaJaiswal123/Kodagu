const mongoose =require('../Db/Connect')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()

const UserSchema=mongoose.Schema({
      name:{
        type:String,
        required:true
      },
      email:{
          type:String,
          required:true
      },
      password:{
          type:String,
          required:true
      },
      tokens:[{
          token:{
              type:String,
              required:true
          }
      }]
    
})

UserSchema.methods.generateToken=async function(){
  const token = await jwt.sign({_id:this._id},process.env.JWT_SECRET)
  this.tokens=this.tokens.concat({token})
  return token
}

const User=mongoose.model('User',UserSchema)

module.exports=User