const express=require('express');

const {createTask, getALLTasks, gettaskById, updateTask, deleteTask}=require('../controllers/task.controller');

const router=express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getALLTasks);
router.get('/tasks/:id', gettaskById);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports=router;