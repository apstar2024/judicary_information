
 async function insertUser(req,res,model){
    const user=new model({
        userName:req.body.userName,
        password:req.body.password,
        userType:req.body.userType,
        gender:req.body.gender,
        fullName:req.body.fullName,
        email:req.body.email,
        mobileNo:req.body.mobileNo
    });
    let result =await user.save();

    console.log(user);
    return result;
}
module.exports = {
    insertUser
  };