const mongoose=require("mongoose")

// Define a schema for the category collection (if not already defined)
const sampleSchema = new mongoose.Schema({}, { collection: 'samplecollection' }); // The empty schema definition `{}` can be replaced with your actual schema
const Sample = mongoose.model('sample', sampleSchema);

module.exports=Sample;