

const express=require("express");
const UserSchema=require("../schema/UserSchema");
const bycrypt=require("bcryptjs")
const router=new express.Router();

router.post("/",async(req,res)=>{
    
    try{
       const user=  (req.body);
       const hashpassd=await bycrypt.hash(user.Password,10)
       user.Password=hashpassd;
       await UserSchema.create(user)
        res.json({success:true})
    }
    catch(e){
        res.json({success:false,error:e.message})
        console.log(e)
    }
    

})
module.exports=router;