const express=require('express');
const connectdb=require('./database/connectdb');
const { default: mongoose } = require('mongoose');

const { User, Judge, Lawyer, Registrar } =require('./modules/User');


// middlewares

//constants
const app=express();
const dbName="JIS";
const uri="mongodb://0.0.0.0:27017"
const port=5000;


const connect=async(collectionName)=>{
await connectdb(uri,dbName) // connect to database
let result=mongoose.connection.collection(collectionName);
result=await result.find({}).toArray();
console.log(result);
}
// connect('user');

app.get('/',async(req,res)=>{
    await connectdb(uri,dbName);
    let result=mongoose.connection.collection('user');
    result=await result.find({}).toArray();
    res.send(result);
})

app.listen(port,(err)=>{
    if(err)
        throw err;
    console.log(`listening local host at port ${port}`);
})

