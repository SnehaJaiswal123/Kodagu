const Task=require('../Model/Task')

const createTask=async (req,res)=>{
    try{
        const newtask=new Task(
            req.body)
        await newtask.save()
        res.send(newtask)
    }
    catch(e){
        res.status(400).send(e)
        throw Error(e)
    }
}

const allTask= async (req,res)=>{
    const tasks=await Task.find({})
    res.send(tasks)
}

const taskById=async (req,res)=>{
    try{
        Task
            .findOne({_id: req.params.id })
            .populate("assigned_user") // key to populate
            .then(task => {
                res.json(task); 
            });
    }
    catch(e){
        console.log("error");
        console.log(e);
        res.status(400).send(e)
    }
}

const updateTask=async (req,res) =>{
    const allowedUpdates=["description","completed","title","users","assigned_user","due_date"]
    const updates=Object.keys(req.body)
    const allowed=updates.every((updates)=>{
        return allowedUpdates.includes(updates)
    })
    if(!allowed){
        return res.status(400).send("Updates not allowed")
    }
    try{

        const taskToUpdate=await Task.findOne({_id:req.params.id})
        if(!taskToUpdate){
            return res.send("cannot found task")
        }
        updates.forEach((update)=>{
            taskToUpdate[update]=req.body[update]
        })
        await taskToUpdate.save();
        res.send(taskToUpdate)
        console.log(taskToUpdate);
    }
    catch(e){
        res.status(400).send(e)
        console.log(e);
    }
}

const deleteTask= async (req,res) =>{
    try{
        const mytask=await Task.findOneAndDelete({_id:req.params.id})
        console.log(mytask);
        if(!mytask){
           return res.status(404).send("task not found")
        }
        res.send({message:"deleted","task":mytask})
    }
    catch(e){
        console.log(e);
        res.status(400).send(e)
    }
}

const analytics=async (req, res) => {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
      const completedTasks = await Task.countDocuments({
        completionStatus: true,
        updatedAt: { $gte: sevenDaysAgo },
      });
  
      res.json({ completedTasksInLast7Days: completedTasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports={
    createTask,
    taskById,
    allTask,
    updateTask,
    deleteTask,
    analytics
};