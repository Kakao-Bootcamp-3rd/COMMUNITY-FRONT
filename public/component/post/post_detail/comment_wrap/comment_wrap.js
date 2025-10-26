export function renderCommentWrap(container) {
  container.innerHTML = `
    <div class="comment_container">
      <div class="comment_input_wrap">
        <input type="text" class="comment_input" placeholder="댓글을 남겨주세요!">
        <button class="btn_submit">댓글 등록</button>
      </div>
      
      <div class="comment_list">
        <div class="comment_item">
          <div class="comment_profile">
            <div class="comment_avatar"></div>
            <div class="comment_info">
              <div class="comment_header">
                <span class="comment_author">더미 작성자 1</span>
                <span class="comment_date">2021-01-01 00:00:00</span>
              </div>
              <p class="comment_text">첫글 내용</p>
            </div>
          </div>
          <div class="comment_actions">
            <button class="btn_edit">수정</button>
            <button class="btn_delete">삭제</button>
          </div>
        </div>

        <div class="comment_item">
          <div class="comment_profile">
            <div class="comment_avatar"></div>
            <div class="comment_info">
              <div class="comment_header">
                <span class="comment_author">더미 작성자 1</span>
                <span class="comment_date">2021-01-01 00:00:00</span>
              </div>
              <p class="comment_text">첫글 내용</p>
            </div>
          </div>
          <div class="comment_actions">
            <button class="btn_edit">수정</button>
            <button class="btn_delete">삭제</button>
          </div>
        </div>

        <div class="comment_item">
          <div class="comment_profile">
            <div class="comment_avatar"></div>
            <div class="comment_info">
              <div class="comment_header">
                <span class="comment_author">더미 작성자 1</span>
                <span class="comment_date">2021-01-01 00:00:00</span>
              </div>
              <p class="comment_text">첫글 내용</p>
            </div>
          </div>
          <div class="comment_actions">
            <button class="btn_edit">수정</button>
            <button class="btn_delete">삭제</button>
          </div>
        </div>
      </div>
    </div>
  `;
}