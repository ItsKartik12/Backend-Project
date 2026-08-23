import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
    {
        username: {
            type: Sttring,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: Sttring,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: Sttring,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImages: {
            type: String, // cloudinary url
        },
        watchHistory: {
            type: Schema.Types.ObjectId,
        }
    }
)

export const User = mongoose.model("User", userSchema)