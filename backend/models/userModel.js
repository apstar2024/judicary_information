const { default: mongoose } = require('mongoose');
const mongodb=require('mongoose');

const uobj={
    userName:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    fullName: {
        type: String,
        required: true
    },
    gender:{
        type:String,
        required:true
    }
}

const userScm=new mongoose.Schema(uobj);

module.exports=mongoose.model('users',userScm);

// let User=mongoose.model('users',userScm);

// User.collection.dropIndex("email_1");
// User.collection.createIndex({ email: 1 });