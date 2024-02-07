import { Request,Response } from "express"
import { ObjectId } from "mongoose";
import User from "../models/User";
import { genrateToken } from "../libs/generataeToken";
import bcrypt from 'bcrypt'

interface IUser {
    _id: ObjectId;
    email: string;
    password: string;
    role: 'admin' | 'user';
  }
export const LoginUser=async (req:Request,res:Response)=>{
    const{email,password}=req.body
    console.log(password)
    try{
       const findUser:IUser | null = await User.findOne({ email });
       if(findUser){
        const confirmPassword=await bcrypt.compare(password, findUser.password);
        if(confirmPassword){
            const response=  genrateToken(findUser,res) 
        }else{
            res.status(400).json({ error: 'Wrong Credentials' });

        }
       }else{
        res.status(400).json({ error: 'You are not registered' });
       }

    }catch(err){
       console.log("err",err)

    }
    
}