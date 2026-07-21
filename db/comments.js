import mongoose from "mongoose"
import Posts from "./posts"
import Users from "./users"

const commentsSchema = new mongoose.Schema(
    {
        postId: {
            type: Schema.Types.ObjectId,
            ref: Posts
        },
        authorId: {
            type: Schema.Tyes.OnbjectId,
            red: Users
        }
    }
)