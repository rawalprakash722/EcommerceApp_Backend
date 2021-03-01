const mongoose=require('mongoose')



const blog=mongoose.model('Blog',{
    title:{
        type:String,
        require:true
    },

    message:{
        type:String,
        require:true
        
    },

    photo:{
        type:String,
        require:true
    }


})

module.exports=blog;