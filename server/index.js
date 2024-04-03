const express=require("express");
const cors=require("cors");
const connectdb=require("./utils/database")
const app=express();

app.use(cors())
app.use(express.json()); 


const FoodListrouter=require("./Routes/FoodList");
const UserDataRouter=require("./Routes/User")
const UserLogin=require("./Routes/UserLogin")
const FoodCategory=require("./Routes/Category")
app.use(FoodListrouter);
app.use("/api/createuser",UserDataRouter);
app.use("/api",UserLogin);
app.use("/api",FoodCategory);





connectdb().then(()=>{
    app.listen(3000,()=>{
        console.log("surver run sucessfully")
    })
})


