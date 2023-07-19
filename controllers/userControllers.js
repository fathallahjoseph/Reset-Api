const User=require('../modeles/userShema')//imp User
//func to add client or user
const adduser=async(req,res)=>{
    try{
const newuser=new User(req.body)
await newuser.save()
res.status(201).json({msg:'user created',newuser:newuser})
    }
    catch(err){
res.status(500).json({msg:'Something went wrong!',err:err})
    }
}
//func to find all client but no looking id
const getusers=async(req,res)=>{
    try{
const users = await User.find()
.select({username:true,_id:false,name:true,email:true})
res.status(200).json({msg:'get all users!',users:users})
    }
    catch(err){
res.status(500).json({msg:'Something went wrong',err:err})
    }
}
//func to delete client or user
const deletuser=async(req,res)=>{
    try{
const user= await User.findByIdAndDelete({_id:req.params.id})
res.status(200).json({msg:'Delete User succées!',user_deleted:user})
    }
    catch(err){
res.status(500).json({msg:'Something went wrong',err:err})
    }
}
//func to update client or user
const updatuser=async(req,res)=>{
    try{
const user= await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
res.status(200).json({msg:'update user succes!',user:user})
    }
    catch(err){
res.status(500).json({msg:'Something went wrong',err:err})
    }
}

module.exports= {adduser, getusers, deletuser,updatuser}//export all func