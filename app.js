require('dotenv').config()
require('express-async-errors');

const express = require("express");
const app = express();

const connectDB = require('./db/connect');
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

app.use('api/v1/auth',authRouter);
app.use('api/v1/jobs',jobsRouter);

const port = process.env.PORT || 3000;

const start =  async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server connected at http://localhost:${port}`));
    }catch(error){
        console.log(error);
    }
};

start();