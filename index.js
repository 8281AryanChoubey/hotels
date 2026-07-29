const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const MenuItemRoutes=require('./routes/menuitemroutes');
const PersonRoutes=require('./routes/personroutes');

app.use('/person',PersonRoutes);
app.use('/menuitem',MenuItemRoutes);

app.listen(8000,console.log('your server ready bsdk at port 8000'));

