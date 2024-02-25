import { IRouter, Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authController } from "../controllers/auth.controller.js";
import { categoryController } from "../controllers/category.controller.js";
import { userMiddleware } from "../middleware/auth.middleware.js";

const router: IRouter = Router();

// user routes
router.post("/sighup", userController.makeUser);

// auth routes
router.post("/login", authController.login);

router.get("/test", userMiddleware, authController.hi);

// category routes
router.post("/category", categoryController.createNewCategory);

export default router;
