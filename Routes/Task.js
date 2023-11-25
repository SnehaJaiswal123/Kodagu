const express=require('express')
const router=express.Router();
const auth =require('../Middleware/Auth')

const { createTask, taskById, allTask,updateTask, deleteTask, analytics} = require('../Controller/Task');

router.post('/create', auth, createTask)
router.get('/taskById/:id', auth, taskById)
router.get('/all', auth, allTask)
router.get('/analytics', auth, analytics)
router.patch('/update/:id', auth, updateTask)
router.delete('/delete/:id', auth, deleteTask)

module.exports=router