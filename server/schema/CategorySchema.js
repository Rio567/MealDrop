const mongoose=require("mongoose")

const CategorySchema=new mongoose.Schema({},{collection:'categorycollection'});
const Ccategory=mongoose.model('categories',CategorySchema);

module.exports=Ccategory;