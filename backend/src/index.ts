import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/route.js";

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:4000", "http://127.0.0.1:4000"],
    }),
);
app.use(cookieParser());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
