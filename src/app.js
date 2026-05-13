const express=require('express');
const cors=require('cors');
const morgan=require('morgan');


const taskRoutes=require('./routes/task.routes');


const notFound=require('./middlewares/notFound.middleware');
const errorHandler=require('./middlewares/error.middleware');

const app=express();

app.use(cors());


app.use(morgan('dev'));

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        message:"API Running",
    });
});


app.use("/api/tasks",taskRoutes);

app.use(notFound);

app.use(errorHandler);

module.exports=app;