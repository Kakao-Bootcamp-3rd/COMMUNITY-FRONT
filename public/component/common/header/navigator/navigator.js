export function renderNavigator(rootEl) {
  rootEl.innerHTML = `
    <div class="navigator_inner">
      <div class="navigator_left"></div>
      <div class="navigator_center">
        <a href="/posts" class="nav_logo">
          NOT ME
        </a>
      </div>
      <div class="navigator_right">
        <div class="profile_dropdown">
          <button class="profile_btn" id="profileBtn">
            <div class="profile_icon">
              <div class="profile_avatar">🐱</div>
            </div>
          </button>
          <div class="dropdown_menu" id="dropdownMenu">
            <a href="/account" class="dropdown_item">
              <span class="dropdown_icon">👤</span>
              프로필
            </a>
            <a href="../users/edit-profile" class="dropdown_item">
              <span class="dropdown_icon">⚙️</span>
              설정
            </a>
            <a href="/password" class="dropdown_item">
              <span class="dropdown_icon">🔒</span>
              비밀번호 변경
            </a>
            <hr class="dropdown_divider">
            <button class="dropdown_item logout_btn" id="logoutBtn">
              <span class="dropdown_icon">🚪</span>
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // 드롭다운 이벤트 바인딩
  const profileBtn = document.getElementById('profileBtn');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const logoutBtn = document.getElementById('logoutBtn');

  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  // 외부 클릭 시 드롭다운 닫기
  document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
  });

  // 로그아웃 이벤트
  logoutBtn.addEventListener('click', () => {
    if (confirm('정말로 로그아웃하시겠습니까?')) {
      localStorage.removeItem('accessToken');
      window.location.href = '../login';
    }
  });


  // // 회원가입 버튼 이벤트
  // const signupBtn = document.getElementById('signupBtn');
  // signupBtn.addEventListener('click', () => {
  //   window.location.href = '/signup';
  // });

  // // 로그인 버튼 이벤트
  // const loginBtn = document.getElementById('loginBtn');
  // loginBtn.addEventListener('click', () => {
  //   window.location.href = '/login';
  // });
}
