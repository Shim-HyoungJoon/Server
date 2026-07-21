const postList = document.getElementById("postList")
const newPostBtn = document.getElementById("newPostBtn")
const newPost = document.getElementById("newPost")
const myPostBtn = document.getElementById("myPostBtn")
const allPostBtn = document.getElementById("allPostBtn")
// import * as getPost from "../data/posts.mjs"


async function loadPost() {
    const token = localStorage.getItem("token")
    try {
        const response = await fetch("http://127.0.0.1:8080/post", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const posts = await response.json()
        postList.innerHTML = ""

        posts.forEach((post) => {
            const li = document.createElement("li")
            li.className = "post-item"
            li.innerHTML = `
                <div>
                    <p>작성자 : ${post.name}</p>
                    <p>작성시간 : ${new Date(post.createdAt).toLocaleString()}</p>
                    <p>게시글 : ${post.text}</p>
                </div>
            `
            postList.appendChild(li)
        })
    } catch (error) {
        console.log("게시글 불러오기 실패: ", error)
    }
}
loadPost()

newPostBtn.addEventListener("click", async () => {
    const text = newPost.value
    const token = localStorage.getItem("token")

    if (!text || text.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "게시글 내용을 입력해주세요"
        })
    }

    try {
        const response = await fetch("http://127.0.0.1:8080/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({text})
        })

        if (response.status !== 201) {
            alert(data.message)
            return
        }

        newPost.value = ""

        loadPost()
    } catch (error) {
        console.log("게시글 작성 실패: ", error)
    }
})

// myPostBtn.addEventListener("click", async () => {
//     const token = localStorage.getItem("token")
//     try {
//         const response = await fetch("http://127.0.0.1:8080/my", {
//             method: "GET",
//             headers: {
//             }
//         })
//     }
// })
