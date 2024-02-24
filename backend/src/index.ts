import express, { Express, json } from "express";
import cookieParser from "cookie-parser";
import router from "./routes/route.js";

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.use(json());
app.use(cookieParser());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
