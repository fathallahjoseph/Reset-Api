const mongoose=require("mongoose")//imp mongoose
//func to make all users same .map
const userSchema=mongoose.Schema({
    username : String,
   name : String,
    email : { type:String,
        required:true,
    }
})
const User=mongoose.model('user',userSchema)
module.exports=User