import { Request, Response, NextFunction } from "express";
import { z as zod } from "zod";
import { UserDetailInput } from "../types/user.type.js";
import { comparePass } from "../utils/crypto.js";
import { generateToken } from "../utils/token.js";
import prisma from "../utils/prisma.js";

let coutn = 0;

const authController = {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const userDetails: UserDetailInput = req.body.user;
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
                secure: true,
                sameSite: "none",
            })
                .status(200)
                .json({
                    message: "Logged in successfully",
                });
        } catch (error) {
            if (error instanceof zod.ZodError) {
                res.status(400).json({ error: error.errors });
            }

            next(error);
        }
    },
    async logout(req: Request, res: Response) {
        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        })
            .status(200)
            .json({ message: "Logged out" });
    },
    // TODO: remove this this is just for testing
    async hi(req: Request, res: Response) {
        console.log(coutn++);
        res.status(200).json({ hi: "hi", c: coutn, user: req.body.user });
    },
};

export { authController };
