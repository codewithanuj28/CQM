const mongoose = require('mongoose')


// schema
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true,
        unique:true
    }
});

//models
const adm=mongoose.model('adm',userSchema);

module.exports=adm; 