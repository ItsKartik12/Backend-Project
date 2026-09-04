import moongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2";
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
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema)