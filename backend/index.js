const express=require('express');
const connectdb=require('./database/connectdb');
const { default: mongoose } = require('mongoose');
const {insertUser,update,deleteUser,getUser, userLogin}=require('./Functions/curd')
const userModel=require('./models/userModel')
const cors = require('cors');

// const { User, Judge, Lawyer, Registrar } =require('./modules/User');


const app=express();
// middlewares
app.use(express.json());
app.use(cors())

//constants
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
    let result=mongoose.connection.collection('users');
    result=await result.find({}).toArray();
    res.send(result);
})

app.post('/Signup',async (req,res)=>{
    await connectdb(uri,dbName);
    await insertUser(req,res,userModel);
})

// handle login
app.post('/Login',async(req,res)=>{
    // res.send({result:'no data found'});
    await connectdb(uri,dbName);
    await userLogin(req,res,'users')
})

// to update user details
app.put('/update/:userName',async (req,res)=>{
    await connectdb(uri,dbName);
    await update(req,res,userModel);
})

// to fetch data using user id
app.get('/users/:userName',async(req,res)=>{
    await connectdb(uri,dbName);
    await getUser(req,res,userModel,'users');
})

// to delete data using user name
app.delete('/delete/:userName',async (req,res)=>{
    await connectdb(uri,dbName);
    await deleteUser(req,res,userModel);
})

app.listen(port,(err)=>{
    if(err)
        throw err;
    console.log(`listening local host at port ${port}`);
})

