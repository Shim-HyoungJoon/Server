import mongoose from "mongoose"
import Users from "./users"

const postsSchema = new mongoose.Schema(
    {
        authorId: {
            type: Schema.Types.ObjectId,
            ref: Users
        },
        authorUserId: {
            type: String,
            ref: Users
        },
        title: {
            type: String,
            required: [true, "제목을 입력해주세요"],
            trim: true
        },
        content: {
            type: String
        },
        imgaeUrls: {
            type: String
        },
        viewCount: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const Posts = mongoose.model("Posts", postsSchema)

export default Posts