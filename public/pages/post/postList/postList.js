import { renderNavigator } from "/component/common/header/navigator/navigator.js";
import { renderPostWrap } from "/component/post/post_wrap/post_wrap.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const posts_wrap = document.getElementById("posts_wrap");
    
    renderNavigator(header);
    renderPostWrap(posts_wrap);
});