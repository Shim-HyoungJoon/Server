import express from "express"
import { config } from "./config.mjs"
import { connectDB } from "./db/database.mjs"
import authRouter from "./router/auth.mjs"
import portsRouter from "./router/posts.mjs"

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use("/post", portsRouter)

app.use((req, res) => {
    res.sendStatus(404)
})

// app.listen(config.host.port, () => {
//     console.log("서버 실행 중...")
// })

connectDB().then(() => {
    app.listen(config.host.port, () => {
        console.log("DB/웹 서버 실행 중...")
    })
}).catch(console.error)