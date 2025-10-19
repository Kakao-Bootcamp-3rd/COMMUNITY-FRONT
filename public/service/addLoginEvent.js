import { API_BASE } from "/config.js";

export function addLoginEvent() {
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const loginBtn = document.querySelector(".btn_login_button");

    loginBtn.addEventListener("click", async () => {
        const email = emailInput.value.trim();
        const passWord = passwordInput.value.trim();

        if (!email || !passWord) {
            alert("이메일과 비밀번호를 입력해주세요.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, passWord }),
            });

            const result = await response.json();

            if (response.ok && result.status === 200) {
                const token = result.data?.accessToken;

                // ✅ JWT 토큰만 저장
                if (token) {
                    localStorage.setItem("accessToken", token);
                }

                alert(result.message || "로그인 성공!");
                // ✅ 로그인 후 바로 메인 페이지로 이동
            } else {
                alert(result.message || "로그인 실패");
            }
        } catch (err) {
            console.error("로그인 요청 실패:", err);
            alert("서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.");
        }
    });
}
