const express=require('express')
const router=express.Router();

const Contact=require('../models/contact_models')
const {check,validationResult}=require('express-validator')

router.post('/insert/contact',function(req,res){
    
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const message =req.body.message
   
        const me=new Contact({name:name, email:email,phone:phone,message:message})
        me.save().then(function(){
            res.send("message added")
            console.log("message Added")
            
        })
})
router.get('/contact/all',function(req,res){
    Contact.find().then(function(data){
        res.status(200).json({data,success:true, message:"Mesage sent!!!"})
        console.log("showed")
    }).catch(function(e){
        res.status(500).json({error:e})
        console.log("not")
    })
})
router.delete('/delete/contact/:id',function(req,res){
    const id=req.params.id;
    Contact.deleteOne({_id : id}).then(function(){
        res.status(200).json({success:true,message:"Contact deleted"})
        console.log("deleted!!")
    });

})

module.exports= router