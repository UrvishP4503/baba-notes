import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

        req.body.user = decoded;

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};
