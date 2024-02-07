import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
  await mongoose.connect('mongodb+srv://aakarsh75way:aakarsh@cluster0.rfutoro.mongodb.net/db?retryWrites=true&w=majority')
  console.log("DB CONNECTED");
  
    }catch(err){
        console.log(err)
    }
}