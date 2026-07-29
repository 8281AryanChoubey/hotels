const express=require('express');
const router=express.Router();
const MenuItem=require('../models/menuitem');

router.post('/',async(req,res)=>{
       try {
              const data=req.body;
              const itemlist=new MenuItem(data);
              const response=await itemlist.save();
                  console.log('items successfully chosen by the customer');
                  res.status(201).json({msg:'data saved in menuitem',response});
       } catch (err) {
              console.log(err);
              res.status(505).json({error:'internal server err0r'});
       }
})

router.get('/',async(req,res)=>{
      try{
       const data=await MenuItem.find();
       console.log("data fetched successfully");
       res.status(201).json(data);
      }
      catch(err){
       console.log(err);
       res.status(505).json({error:'internal server error'});
      }
})

router.delete('/:id',async(req,res)=>{
       try {
               const menuitem_id= req.params.id;
       const response=await MenuItem.findByIdAndDelete(menuitem_id);
       if(!response){
               return  res.status(404).json({msg:'item not found'});
       }
       console.log('item deleted');
       res.status(201).json({msg:'item deleted successfully',deletedItem:response})
       } catch (err) {
              res.status(501).json({error:'internal server error'});
       }
})

router.get('/:tastetype',async(req,res)=>{
        try{
            const tastetype=req.params.tastetype;
            if(!tastetype){
                res.status(404).json({msg:'not found that taste'})
            }
            const response=await MenuItem.find({taste:tastetype});
            res.status(201).json({msg:'smells good and taste found',response});
        }
        catch(err){
            console.log('internal server error',err);
            res.status(501).json({error:'internal server error'})
        }
})

module.exports=router;
