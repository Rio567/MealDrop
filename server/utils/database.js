const mongoose=require("mongoose")


const URL="mongodb+srv://ashutoshdwivedi564:Ashu2002@foodapp.mdrhyuf.mongodb.net/MealDropDatabase?retryWrites=true&w=majority&appName=foodapp"
const connect = async () => {
    try {
        // Connect to the database
        await mongoose.connect(URL);
        console.log("Database connected successfully");

        
    } catch (err) {
        console.log("Database not connected, showing error", err);
    }
}

module.exports = connect;
