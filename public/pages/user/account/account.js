
import { renderNavigator } from "/component/common/header/navigator/navigator.js";
import { renderAccountWrap } from "/component/user/account/account_wrap/account_wrap.js";
import { renderFooter } from "/component/common/footer/footer_inner.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header")
    const account_wrap = document.getElementById("account_wrap");
    const footer = document.getElementById("footer")

    renderNavigator(header);
    renderAccountWrap(account_wrap);
    renderFooter(footer);

});