import { renderLoginForm } from "../../../component/body/login-form/login-form.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ 폼 주입
  const root = document.getElementById("login-form-root");
  renderLoginForm(root);

  // 2️⃣ 로그인 이벤트 처리
  const form = document.getElementById("login-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("https://bookpick.duckdns.org/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "로그인 실패");
        return;
      }

      // ✅ 로그인 성공
      alert("로그인 성공! 환영합니다 😊");
      console.log("서버 응답:", result);

      // 예시: 토큰 저장 후 리다이렉트
      localStorage.setItem("accessToken", result.data?.accessToken);
      window.location.href = "/pages/main/main.html";
    } catch (error) {
      console.error("로그인 요청 오류:", error);
      alert("서버와 통신 중 문제가 발생했습니다.");
    }
  });
});
