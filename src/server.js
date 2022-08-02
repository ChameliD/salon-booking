const express= require('express');
require('dotenv').config();
const bodyParser=require('body-parser');
const dbConnection=require('./db/connection');
const server=express();
const router =require("./route/");

const port=process.env.PORT| 3001;

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))
server.use("/api",router);

dbConnection();
server.listen(port,function(){
    //console.log('hi',process.env)
    console.log('server started at port:',port);
})