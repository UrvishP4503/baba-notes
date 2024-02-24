import { IRouter, Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authController } from "../controllers/auth.controller.js";

const router: IRouter = Router();

router.post("/sighup", userController.makeUser);
router.get("/login", authController.login);

export default router;
