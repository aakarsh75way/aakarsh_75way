// src/app.ts
import express, { Request, Response } from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/authRoutes"
import propertyRoutes from "./routes/propertyRoutes"

import { connectDB } from './libs/connectDB';
const app = express();
const port: number = 8080;
app.use(express.json());
app.use(cors({
  credentials: true,
}))

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api", propertyRoutes)

app.listen(port, async () => {
  await connectDB()
  console.log(`Server is running on http://localhost:${port}`);
});
