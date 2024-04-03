const express=require ("express")
const CategorySchema=require("../schema/CategorySchema")
const router=new express.Router()

router.get('/category',async(req,res)=>{

    try{
            const data=await CategorySchema.find({});
            res.send(data)

    }
    catch(e){
        res.json(e)
    }
})
module.exports=router;
