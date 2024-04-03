const express=require("express");
const Sample=require("../schema/FoodCategorySchema");
const router=new express.Router();

router.get("/",async(req,res)=>{
    const data = await Sample.find({});
       res.send(data)
})

module.exports=router;