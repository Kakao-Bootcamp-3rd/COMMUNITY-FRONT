// post_item에서 renderPostItem 가져오기
import { renderPostItem } from './post_item/post_item.js';

// 더미 데이터
const dummyPosts = [
    { id: 1, title: '제목 1', date: '2021-01-01 00:00:00', likes: 0, comments: 0, views: 0, author: 'Halo' },
    { id: 2, title: '제목 2', date: '2021-01-01 00:00:00', likes: 5, comments: 2, views: 10, author: '더미 작성자 2' },
    { id: 3, title: '제목 3', date: '2021-01-01 00:00:00', likes: 3, comments: 1, views: 7, author: '더미 작성자 3' },
    { id: 4, title: '제목 4', date: '2021-01-01 00:00:00', likes: 0, comments: 0, views: 0, author: '더미 작성자 4' },
    { id: 5, title: '제목 5', date: '2021-01-01 00:00:00', likes: 8, comments: 3, views: 15, author: '더미 작성자 5' }
];

// post_wrap 전체를 렌더링 (네비게이터처럼 컨테이너 받아서 렌더링)
export function renderPostWrap(rootEl) {
    if (!rootEl) {
        console.error('rootEl을 찾을 수 없습니다!');
        return;
    }

    // 모든 게시글 HTML을 합쳐서 만들기
    const postsHTML = dummyPosts.map(post => renderPostItem(post)).join('');

    // post_wrap 전체 HTML 구조 생성
    rootEl.innerHTML = `
    <div class="post-wrap">
      <div class="post-wrap__header">
        <span class="post-wrap__greeting">안녕하세요, 아무 말 대잔치 게시판입니다.</span>
        <button class="post-wrap__add-btn">게시글 작성</button>
      </div>
      <div class="post-wrap__list">
        ${postsHTML}
      </div>
    </div>
  `;

    // 이벤트 바인딩
    bindEvents(rootEl);
}

// 이벤트 바인딩 함수
function bindEvents(rootEl) {
    // 게시글 작성 버튼 이벤트
    const addBtn = rootEl.querySelector('.post-wrap__add-btn');
    addBtn?.addEventListener('click', () => {
        window.location.href = '/post/write';
    });

    // 게시글 클릭 이벤트
    const postItems = rootEl.querySelectorAll('.post-item');
    postItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const postId = item.getAttribute('data-post-id');
            window.location.href = `/posts/${postId}`;
        });
    });
}