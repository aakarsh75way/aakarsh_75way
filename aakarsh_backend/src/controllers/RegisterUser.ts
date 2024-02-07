import { Request,Response } from "express"
import User from "../models/User";
import bcrypt from 'bcrypt'
export const RegisterUser=async (req:Request,res:Response)=>{
    try {
        const { username, email, password,confirmPassword} = req.body;
       console.log(username,email,password,confirmPassword);
       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: 'Email already exists' });
        }
        if(password===confirmPassword){
    
       const hashedPassword = await bcrypt.hash(password, 10);
    

     const newUser = new User({
       username,
       email,
       role:"user",
       password: hashedPassword,
     });
     await newUser.save();
     res.status(201).json({ message: 'Successfully Registered' });
        }else{
          res.status(400).json({ message: 'Wrong Credentials!'});
        }
   
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
    
