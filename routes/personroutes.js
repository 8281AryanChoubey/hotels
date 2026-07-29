const express=require('express');
const router=express.Router();

const Person=require('../models/person');

router.post('/',async(req,res)=>{
       try {
              const data=req.body;
              const newperson=new Person(data);
              const response=await newperson.save();
                    console.log('data saved');
                    res.status(201).json({msg:'detail saved',response});
       } catch (err) {
               console.log(err);
               res.status(500).json({error:'internal server err0r'});      
       }
})

router.get('/',async(req,res)=>{
       try {
             const data=await Person.find();
             console.log('data fetched');
             res.status(201).json(data); 
       } catch (err) {
              console.log(err);
              res.status(501).json({error:'internal server error'});
       }
})

router.get('/:worktype',async(req,res)=>{
       try {
              const worktype= req.params.worktype;
              if(worktype=='employee' || worktype=='manager' || worktype=='professor' || worktype=='chef' || worktype=='detective' || worktype=='gang leader'){
                       const response=await Person.find({work:worktype});
              res.status(201).json(response); 
        }
               console.log('person not found');
                  return   res.status(404).json({msg:'response not found or check , is work is becoming in the list of person'});
         
             
       } catch (err) {
              console.log('internal server error');
              res.status(505).json({error:'internal server error'});
       }
})

router.put('/:id',async(req,res)=>{
       try {
              const person_id=req.params.id;
              const newdata=req.body;
              const response=await Person.findByIdAndUpdate(person_id,newdata,{
                     new:true,
                    runValidators:true
              });
           if(!response){
              res.status(404).json({msg:'data not found'});
              }  
               res.status(201).json({msg:'data updated successfully',response});
       } catch (err) {
                  console.log(err);
                  res.status(505).json({error:'internal server error'});
       }
})

router.delete('/:id',async(req,res)=>{
       try {
              const person_id=req.params.id;
           const response=await Person.findByIdAndDelete(person_id);
            if(!response){console.log('data not found'); res.status(404).json({msg:'data not found'})}
            res.status(201).json({msg:'item deleted',response})
       } catch (err) {
              console.log(err);
              res.status(505).json({error:'internal server error'})
       }
})

module.exports=router;

