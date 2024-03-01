import { IRouter, Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authController } from "../controllers/auth.controller.js";
import { categoryController } from "../controllers/category.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router: IRouter = Router();

// user routes
router.post("/signup", userController.makeUser);

// auth routes
router.post("/login", authController.login);
router.get("/logout", authMiddleware, authController.logout);

// category routes
router.post("/category", authMiddleware, categoryController.createNewCategory);
router.get("/category/:id?", authMiddleware, categoryController.getCategory);
router.put("/category", authMiddleware, categoryController.updateCategory);
router.delete("/category", authMiddleware, categoryController.deleteCategory);

// TODO: remove this this is just for testing
router.get("/test", authMiddleware, authController.hi);

export default router;
