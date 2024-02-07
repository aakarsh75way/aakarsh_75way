import { Router } from "express";
import { LoginUser } from "../controllers/loginUser";
import { RegisterUser } from "../controllers/RegisterUser";

const router=Router()
router.post("/login",LoginUser)
router.post("/register",RegisterUser)

export default router