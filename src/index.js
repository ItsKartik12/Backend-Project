// import dotenv from "dotenv";

// // 1. Initialize env vars first
// dotenv.config({
//     path: "./.env"
// });

// // 2. Import modules after env vars are populated
// import connectDB from "./db/index.js";
// import { app } from "./app.js";

// const PORT = process.env.PORT || 8000;

// // 3. Connect DB & Start Server
// connectDB()
//     .then(() => {
//         app.on("error", (error) => {
//             console.error("Express App Error: ", error);
//             throw error;
//         });

//         app.listen(PORT, () => {
//             console.log(`⚙️  Server is running at port : ${PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.error("MONGO DB connection failed !!! ", err);
//         process.exit(1); // Force exit process on connection failure
//     });
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;

        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);

        })
    }
    catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();