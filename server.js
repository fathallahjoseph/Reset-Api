const express=require('express')//imp express
const app=express()//just taging
const mongoose=require('mongoose')//imp mongoose
const dotenv=require('dotenv')//imp .env
dotenv.config()
app.use(express.json())//to useally use thunder client
const port=process.env.PORT||8080//make port
mongoose.
connect(process.env.Mongo_Atlas)
.then(()=>console.log('db connected'))//connect widh db atlas
app.listen(port,(err)=>{err?console.log(err)
    :console.log(`server is running in this port"${port}"`)}) //conected server and making
    app.use('/api',require('./routes/userRoute'))//imp all route