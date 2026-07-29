const mongoose=require('mongoose');
const menuitem=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:["sweet", "spicy" , "sour" ],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredient:{
        type:[String],
        default:[]
    },
    total_sales:{
        type:Number,
        default:0
    }
})
      const MenuItem=mongoose.model('menuitem',menuitem);
    module.exports=MenuItem;


