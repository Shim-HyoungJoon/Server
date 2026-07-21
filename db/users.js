import mongoose from "mongoose"


const usersSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: [true, "아이디는 필수 입력입니다."],
            trim: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: [true, "비밀번호는 필수 입력입니다."],
            trim: true
        },
        name: {
            type: String,
            required: [true, "이름은 필수 입력입니다."],
            trim: true
        },
        email: {
            type: String,
            required: [true, "이메일은 필수 입력입니다."],
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("Users", usersSchema)

export default Users