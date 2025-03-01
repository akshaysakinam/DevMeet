const mongoose=require('mongoose');

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://akshaysakinam80:Akshaysakinam.123@nodeproject.8zyvl.mongodb.net/devMeet");
}

module.exports= connectDB
