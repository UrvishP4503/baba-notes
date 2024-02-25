import { IRouter, Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authController } from "../controllers/auth.controller.js";
import { categoryController } from "../controllers/category.controller.js";

const router: IRouter = Router();

// user routes
router.post("/sighup", userController.makeUser);

// auth routes
router.post("/login", authController.login);

// category routes
router.post("/category", categoryController.createNewCategory);

export default router;
