require('dotenv').config()
const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("hellow world");
});

const port = process.env.PORT || 3000;

const start =  async()=>{
    try{
        app.listen(port,console.log(`server connected at http://localhost:${port}`));
    }catch(error){
        console.log(error);
    }
};

start();