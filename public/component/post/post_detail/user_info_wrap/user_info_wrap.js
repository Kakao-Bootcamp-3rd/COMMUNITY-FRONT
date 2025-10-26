export function renderUserInfoWrap(container) {
    container.innerHTML = `
      <div class="user_info_container">
        <div class="user_header">
          <div class="user_profile">
            <div class="user_avatar"></div>
            <div class="user_details">
              <span class="user_name">더미 작성자 1</span>
              <span class="post_date">2021-01-01 00:00:00</span>
            </div>
          </div>
          <div class="action_buttons">
          <button class="btn_follow" onclick="location.href='/posts/1/edit'">수정</button>
            <button class="btn_message">삭제</button>
          </div>
        </div>
      </div>
    `;
}