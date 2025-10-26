import { renderHeader } from "/component/auth/header/header_inner.js";
import { renderLoginWrap } from "/component/auth/login_wrap/login_wrap.js";
import { renderFindWrap} from "/component/auth/login_wrap/find_wrap.js";
import { renderGladBanner } from "/component/auth/gladbanner/gladbanner.js";
import { renderFooter} from "/component/auth/footer/footer_inner.js";

import {addLoginEvent} from "/service/auth/addLoginEvent.js"


document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header")
  const login_wrap = document.getElementById("login_wrap");
  const find_wrap = document.getElementById("find_wrap");
  const gladbanner = document.getElementById("gladbanner");
  const footer = document.getElementById("footer")


  renderHeader(header);
  renderLoginWrap(login_wrap);
  renderFindWrap(find_wrap);
  renderGladBanner(gladbanner);
  renderFooter(footer);


  // 랜더링 후 바인딩 함수들
  addLoginEvent();
});