import { renderNavigator } from "/component/common/header/navigator/navigator.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    
    // URL에서 게시글 ID 가져오기
    
    renderNavigator(header);
});