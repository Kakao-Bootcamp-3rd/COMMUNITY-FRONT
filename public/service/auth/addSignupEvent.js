import { API_BASE } from "/config.js";

export function addSignupEvent() {
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirmPassword");
    const nameInput = document.querySelector("#name");
    const signupBtn = document.querySelector(".btn_signup_button");

    signupBtn.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const name = nameInput.value.trim();

        if (!email || !password || !confirmPassword || !name) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (password.length < 6) {
            alert("비밀번호는 6자 이상이어야 합니다.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password, name }),
            });

            const result = await response.json();

            if (response.ok && result.status === 200) {
                alert("회원가입이 완료되었습니다. 로그인해주세요.");
                window.location.href = "/login";
            } else {
                alert(result.message || "회원가입 실패");
            }
        } catch (err) {
            console.error("회원가입 요청 실패:", err);
            alert("서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
    });
}

