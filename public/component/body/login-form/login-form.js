// 로그인 폼을 렌더링하는 컴포넌트
export function renderLoginForm(rootEl) {
    rootEl.innerHTML = `
      <form id="login-form" class="login-form">
        <div class="form-group">
          <label for="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
  
        <button type="submit" class="login-btn">로그인</button>
      </form>
    `;
  }
  