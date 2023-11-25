const express=require('express')
const app=express();

app.use(express.json())

const userrouter=require('./Routes/User')
const taskrouter=require('./Routes/Task')

app.use('/user',userrouter)
app.use('/task',taskrouter)

app.listen(2000,()=>{
    console.log("server is running");
})




    
