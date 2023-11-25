const mongoose =require('../Db/Connect')

const TaskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     description:{
        type:String,
        required:true
     },
      assigned_user:
       [ 
        { 
           type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
        ]

      ,
      due_date:{
        type:String,
        required:true
      },
      completed:{
        type:Boolean,
        required:true
      }
})

const Task=mongoose.model('Task',TaskSchema)

module.exports=Task