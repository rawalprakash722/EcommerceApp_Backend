const mongoose=require('mongoose')


const contact=mongoose.model('Contact',{
    name:{
        type:String,
        require:true
    },
    email:{
       require:true,
        type:String,
    },
    phone:{
        type:String,
        require:true
       
    },
    message:{
        type:String,
        require:true
        
    }
})

module.exports=contact;
