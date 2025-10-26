import { renderNavigator } from "/component/common/header/navigator/navigator.js";
import { renderPostWrap } from "/component/post/post_wrap/post_wrap.js";
import { renderFooter } from "/component/common/footer/footer_inner.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const posts_wrap = document.getElementById("posts_wrap");
    const footer = document.getElementById("footer");

    
    renderNavigator(header);
    renderPostWrap(posts_wrap);
    renderFooter(footer);
});