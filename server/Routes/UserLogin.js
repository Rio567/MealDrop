const express=require("express")
const bycrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userschema=require("../schema/UserSchema");

const router=express.Router();
const jwtSecretKey="ThisIsSecretKeyStringNotKnownByUser"
router.post('/login',async(req,res)=>{
    try{
          const {Email,Password}=req.body;
          const user=await userschema.findOne({Email:Email})

          if(!user){
           return  res.status(404).json({message:"user not found"})
          }
          if(!bycrypt.compare(Password,user.Password)){
            return res.status(400).json({message:"Credential not found"})
          }

          const authToken=jwt.sign({
            id:user._id,
            email:user.Email
          },jwtSecretKey)
         
          res.status(200).json({
            message:"login successfully",
            authToken
          })
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"server error"})
    }
})

module.exports=router;