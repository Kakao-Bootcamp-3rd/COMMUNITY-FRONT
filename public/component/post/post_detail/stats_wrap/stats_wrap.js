export function renderStatsWrap(container) {
    container.innerHTML = `
      <div class="stats_container">
        <div class="stat_card">
          <div class="stat_number">123</div>
          <div class="stat_label">좋아요수</div>
        </div>
        <div class="stat_card">
          <div class="stat_number">123</div>
          <div class="stat_label">조회수</div>
        </div>
        <div class="stat_card">
          <div class="stat_number">123</div>
          <div class="stat_label">댓글</div>
        </div>
      </div>
    `;
  }