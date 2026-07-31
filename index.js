const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();

const MenuItemRoutes=require('./routes/menuitemroutes');
const PersonRoutes=require('./routes/personroutes');

app.use('/person',PersonRoutes);
app.use('/menuitem',MenuItemRoutes);


const PORT=process.env.PORT || 3000;
app.listen(PORT,console.log('your server ready bsdk at port 3000'));

