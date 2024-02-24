import { Request, Response, NextFunction } from "express";
import { z as zod } from "zod";
import { UserDetailInput, UserEditInput } from "../types/user.type.js";
import { hash } from "../utils/crypto.js";
import prisma from "../utils/prisma.js";

const userController = {
    async makeUser(req: Request, res: Response, next: NextFunction) {
        try {
            // validating user details here
            const userDetails: UserDetailInput = req.body;

            // check if the email already exists
            const existingUser = await prisma.user.findFirst({
                where: {
                    email: userDetails.email,
                },
            });

            if (existingUser) {
                return res.status(400).json({ error: "Email already exists" });
            }

            // Create a new user

            const hashedPassword: string = hash(userDetails.password);

            const user = await prisma.user.create({
                data: {
                    email: userDetails.email,
                    password: hashedPassword,
                    name: userDetails.name,
                },
            });

            const userOutput = { ...user, password: undefined };

            res.json(userOutput);
        } catch (error) {
            // If the error is a zod error
            if (error instanceof zod.ZodError) {
                res.status(400).json({ error: error.errors });
            }
            next(error);
        }
    },

    // TODO: implement delete user method
    // TODO: implement the editUser method
    // there is no way from frontend to use these methods yet
    // so these methods are not needed for now
    async editUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userDetails: UserEditInput = req.body;
            const userId = req.params.id;

            const user = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    email: userDetails.email,
                    name: userDetails.name,
                },
            });

            const userOutput = { ...user, password: undefined };

            res.json(userOutput);
        } catch (error) {
            if (error instanceof zod.ZodError) {
                res.status(400).json({ error: error.errors });
            }
            next(error);
        }
    },
};

export { userController };
