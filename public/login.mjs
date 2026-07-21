const id = document.getElementById("useridInput")
const pw = document.getElementById("passwordInput")
const login = document.getElementById("loginBtn")
const register = document.getElementById("regBtn")

loginBtn.addEventListener("click", async () => {
    const userid = id.value.trim()
    const password = pw.value
    if (!userid) {
        alert("아이디 확인")
        return
    }

    if (!password) {
        alert("비밀번호 확인")
        return
    }

    try {
        const response = await fetch("http://127.0.0.1:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userid, password })
        })

        const data = await response.json()

        if (response.status === 401) {
            alert(data.message)
            return
        }

        localStorage.setItem("token", data.token)

        alert("로그인 성공!")

        location.href = "./posts.html"
    } catch (error) {
        console.log("로그인 실패: ", error)
    }
})

regBtn.addEventListener("click", () => {
    location.href = "./register.html"
})