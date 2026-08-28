import moongoose, { Schema } from "mongoose";
const videoSchema = new Schema(
    {
        vedioFile: {
            type: String, // cloudinary url
            required: true
        },
        thumbnail: {
            type: String, // cloudianry url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String, // cloudianry url
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owners: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timeStamps: true
    }
)
export const Video = mongoose.model("Video", videoSchema)