import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Explicitly extract string primitive and strip any potential quotes/whitespace
        const uri = String(process.env.MONGODB_URI).trim().replace(/^["']|["']$/g, '');
        const targetUrl = `${uri}/${DB_NAME}`;

        console.log("Connecting to:", targetUrl);

        const connectionInstance = await mongoose.connect(targetUrl);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED ", error);
        process.exit(1);
    }
};

export default connectDB;