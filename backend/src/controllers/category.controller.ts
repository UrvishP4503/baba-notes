import { Request, Response, NextFunction } from "express";
import { z as zod } from "zod";
import { CategoryDetailInput, CategoryInput } from "../types/category.type.js";
import prisma from "../utils/prisma.js";

const categoryController = {
    async createNewCategory(req: Request, res: Response, next: NextFunction) {
        try {
            const category: CategoryDetailInput = CategoryInput.parse(req.body);

            const userId = req.body.user.id;

            const newCategory = await prisma.category.create({
                data: {
                    name: category.category,
                    user: {
                        connect: {
                            id: userId,
                        },
                    },
                },
            });

            res.status(201).json({
                message: "Category created successfully",
                category: newCategory,
            });
        } catch (error) {
            if (error instanceof zod.ZodError) {
                res.status(400).json({ message: error.errors });
            }
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    },
    /**
     * Retrieves all the categories for a given user.
     * If an id is provided, retrieves a specific category for the user.
     * @param req - The request object.
     * @param res - The response object.
     * @param next - The next function.
     */
    async getCategory(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.body.user;
        const id = parseInt(req.params.id);

        try {
            let categories;
            if (id) {
                categories = await prisma.category.findUnique({
                    where: {
                        id: id,
                        userId: userId,
                    },
                });
            } else {
                categories = await prisma.category.findMany({
                    where: {
                        userId: userId,
                    },
                });
            }

            res.status(200).json({ category: categories });
        } catch (error) {
            next(error);
        }
    },
    async updateCategory(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.body.user;
        const { category, id } = req.query;

        if (!id) {
            res.status(400).json({ message: "Category id is required" });
        }

        if (!category) {
            res.status(400).json({ message: "Category name is required" });
        }

        try {
            const updatedCategory = await prisma.category.update({
                where: {
                    id: parseInt(id as string),
                    userId: userId,
                },
                data: {
                    name: category as string,
                },
            });

            res.status(200).json({
                message: "Category updated successfully",
                category: updatedCategory,
            });
        } catch (error) {
            next(error);
        }
    },

    async deleteCategory(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.body.user;
        const { category, id } = req.query;

        if (!id) {
            res.status(400).json({ message: "Category id is required" });
        }

        if (!category) {
            res.status(400).json({ message: "Category name is required" });
        }

        try {
            await prisma.category.delete({
                where: {
                    id: parseInt(id as string),
                    userId: userId,
                },
            });

            res.status(204).json({ message: "Category deleted successfully" });
        } catch (error) {
            next(error);
        }
    },
};

export { categoryController };
