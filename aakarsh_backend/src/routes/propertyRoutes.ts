import { Router } from "express";
import { getProperty } from "../controllers/getProperty";
import { initializePassport } from "../middlewares/authMiddleware";


const router=Router()

router.get("/properties",initializePassport(),getProperty)


export default router