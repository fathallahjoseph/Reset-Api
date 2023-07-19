const express=require('express')//imp express
const route=express.Router()//imp method route
const {adduser,getusers,deletuser,updatuser}=require("../controllers/userControllers")//imp func of controllers.js



route.post('/post',adduser)//route post
route.get('/',getusers)//route get
route.put('/delet/:id',updatuser)//route put
route.delete('/delet/:id',deletuser)//route delete


module.exports=route//exp route