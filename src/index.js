import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// Load environment variables as early as possible
dotenv.config({
    path: "./.env"
});

// Connect to MongoDB and then start the Express server
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;

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
    });