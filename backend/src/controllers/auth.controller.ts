import { Request, Response, NextFunction } from "express";
import { z as zod } from "zod";
import { User } from "../models/user.model";
import { comparePass } from "../utils/crypto";
import { generateToken } from "../utils/token";
import prisma from "../utils/prisma";

const authController = {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const userDetails: User = req.body;
            const user = await prisma.user.findFirst({
                where: {
                    email: userDetails.email,
                },
            });

            if (!user) {
                return res.status(404).json({ error: "Email not found" });
            }

            const isValid = comparePass(userDetails.password, user.password);

            if (!isValid) {
                return res.status(400).json({ error: "Invalid password" });
            }

            const token = generateToken({ id: user.id });

            res.cookie("token", token, {
                httpOnly: true,
            })
                .status(200)
                .json({ message: "Logged in successfully" });
        } catch (error) {
            if (error instanceof zod.ZodError) {
                res.status(400).json({ error: error.errors });
            }

            next(error);
        }
    },
};

export { authController };
