import { Router } from "express";
import authController from "../controllers/auth.controller";

let router:Router;

router = Router();

router.post("/api/login", authController.Login);
router.post("/api/register", authController.Register);
 
export const ApiRouter:Router =router;