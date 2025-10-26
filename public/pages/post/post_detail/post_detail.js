import { renderNavigator } from "/component/common/header/navigator/navigator.js";

import { renderUserInfoWrap } from "/component/post/post_detail/user_info_wrap/user_info_wrap.js";
import { renderArticleWrap } from "/component/post/post_detail/article_wrap/article_wrap.js";
import { renderStatsWrap } from "/component/post/post_detail/stats_wrap/stats_wrap.js";
import { renderCommentWrap } from "/component/post/post_detail/comment_wrap/comment_wrap.js";

import { renderFooter } from "/component/common/footer/footer_inner.js";


document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const user_info_wrap = document.getElementById("user_info_wrap");
    const article_wrap = document.getElementById("article_wrap");
    const stats_wrap = document.getElementById("stats_wrap");
    const comment_wrap = document.getElementById("comment_wrap");
    const footer = document.getElementById("footer");


    renderNavigator(header);
    renderUserInfoWrap(user_info_wrap);
    renderArticleWrap(article_wrap);
    renderStatsWrap(stats_wrap);
    renderCommentWrap(comment_wrap);
    renderFooter(footer);

});

