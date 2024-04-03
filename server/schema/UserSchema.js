const mongoose=require("mongoose");
const validator=require("validator");

const UserSchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String
    },
    Email:{
       type:String,
       required:true,
       validate(value){
        if(!validator.isEmail(value)){
            throw new error("wrong email")
        }
       }
    },
    Password:{
        type:String,
        required:true
    },
    date:{
       type:Date,
       default:Date.now
    }

})
module.exports=new mongoose.model("User",UserSchema);