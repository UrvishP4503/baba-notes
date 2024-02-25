import { Request, Response, NextFunction } from "express";
import { z as zod } from "zod";
import { CategoryDetailInput } from "../types/category.type.js";
import prisma from "../utils/prisma.js";

const categoryController = {
    async createNewCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const category: CategoryDetailInput = req.body;
            const userId = req.body.user.id;

            prisma.category.create({
                data: {
                    name: category.categoryName,
                    userId: userId,
                },
            });

            res.status(201).json({ message: "Category created successfully" });
        } catch (error) {
            if (error instanceof zod.ZodError) {
                res.status(400).json({ message: error.errors });
            }
            next(error);
        }
    },
};

export { categoryController };
