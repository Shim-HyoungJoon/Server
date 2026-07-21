const id = document.getElementById("useridInput")
const pw = document.getElementById("passwordInput")
const userName = document.getElementById("nameInput")
const userEmail = document.getElementById("emailInput")
const register = document.getElementById("regBtn")

regBtn.addEventListener("click", async () => {
    const userid = id.value.trim()
    const password = pw.value
    const name = userName.value.trim()
    const email = userEmail.value.trim()
    if (!userid) {
        alert("아이디를 입력하세요")
        return
    }

    if (!password) {
        alert("비밀번호를 입력하세요")
        return
    }

    if (!name) {
        alert("이름을 입력하세요")
        return
    }

    if (!email) {
        alert("이메일을 입력하세요")
        return
    }

    try {
        const response = await fetch("http://127.0.0.1:8080/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userid, password, name, email })
        })

        const data = await response.json()

        if (response.status === 409) {
            alert(data.message)
            return
        }

        alert("회원가입 성공!")

        location.href = "./index.html"

    } catch (error) {
        console.log("회원가입 실패: ", error)
    }
})