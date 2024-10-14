const mongoose = require('mongoose')


// schema
const userSchema = new mongoose.Schema({
    department:{
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    },
    query:{
        type:String,
        require:true,
    },
    status:{
        type:String,
        require:true,
       
    },

    uid:{
        type:String,

    }
});

//models
const que=mongoose.model('que',userSchema);

module.exports=que;