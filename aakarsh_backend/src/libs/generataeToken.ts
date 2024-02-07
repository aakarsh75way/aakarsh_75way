import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { Response } from 'express';

interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'employee';
}

export const genrateToken = (findUser: IUser, res: Response) => {

  const accessToken = jwt.sign(
    { userId: findUser._id, email: findUser.email, role: findUser.role },
   '12345',
    { expiresIn: '1d' }
  );
  // Send a JSON response with the user information and tokens
  res.status(200).json({findUser,accessToken,role:findUser.role });
};