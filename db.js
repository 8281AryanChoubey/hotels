const mongoose=require('mongoose');
require('dotenv').config();
//const mongoUrl=  'mongodb://127.0.0.1:27017/hotels';
const mongoUrl=process.env.MONGODB_URL;
mongoose.connect(mongoUrl).then(()=>console.log("DB Connected")).catch(err=>console.log(err));
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('db is connected successfully');
})
db.on('disconnected',()=>{
    console.log('db is disconnected');
})
db.on('error',(err)=>{
    console.log('something mismatch',err);
})
module.exports=db;
