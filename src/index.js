import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Ensure dotenv is configured (redundant with -r dotenv/config, but safe)
dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Express App Error: ", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`⚙️  Server is running at port : ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MONGO DB connection failed !!! ", err);
        process.exit(1);
    });