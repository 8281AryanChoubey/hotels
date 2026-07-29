const mongoose=require('mongoose');
const mongoUrl=  'mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoUrl);
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
