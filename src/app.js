import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// 1. Strict CORS setup for credentialed requests (cookies/sessions)
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true,
    })
);

// 2. Core middleware stack
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };