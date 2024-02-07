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
export const getProperty=async (req:Request,res:Response)=>{
   
    try{
     res.status(200).send({message:"Hello"})
    }catch(err){
       console.log("err",err)
    }
    
}