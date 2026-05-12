const TaskModel=require('../models/task.model');
const asyncHandler=require('../utils/asyncHandler');


exports.createTask=asyncHandler(async(req,res)=>{
    const {title, description}=req.body;

    if(!title){
        return res.status(400).json({success:false, message:'Title is required'});

    }

    const task=await TaskModel.createTask(title, description);

    res.status(201).json({success:true, data:task});
});

exports.getALLTasks=asyncHandler(async(req,res)=>{
    const tasks=await TaskModel.getAllTasks();

    res.status(200).json({success:true, data:tasks});
});

exports.gettaskById=asyncHandler(async(req,res)=>{
    const task=await TaskModel.getTaskById(req.params.id);
    if(!task){
        return res.status(404).json({success:false, message:'Task not found'}); 
    }
    res.status(200).json({success:true, data:task});
});

exports.updateTask=asyncHandler(async(req,res)=>{
    const {title, description}=req.body;
    const existingTask=await TaskModel.getTaskById(req.params.id);
    if(!existingTask){
        return res.status(404).json({success:false, message:'Task not found'});
    }
    const updatedTask=await TaskModel.updateTask(req.params.id, title, description,completed);
    res.status(200).json({success:true, data:updatedTask});
});

exports.deleteTask=asyncHandler(async(req,res)=>{
    const deletedTask=await TaskModel.deleteTask(req.params.id);
    if(!deletedTask){
        return res.status(404).json({success:false, message:'Task not found'});
    }
    res.status(200).json({success:true, data:deletedTask});
});

