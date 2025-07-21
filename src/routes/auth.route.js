import { Router } from "express";
import authController from '../controllers/auth.controller.js'


const router = Router()

// get

router.get('/',authController.login)

export default router
